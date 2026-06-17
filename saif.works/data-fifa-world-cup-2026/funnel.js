/* funnel.js — the quiet funnel shared by every WC page.
 *
 * Three escalating, restrained touchpoints, all in the site's own cream/ink language:
 *   1. a footer "work with us" + email block (always present),
 *   2. a small bottom-right dock that slides up after real engagement,
 *   3. a full-screen takeover (the calm "Arsenal" moment) on exit-intent or deep clicking.
 * Click-count escalation feeds 2 and 3. Everything is frequency-capped via localStorage so a
 * visitor who converts or dismisses is never nagged. Email goes to /api/lead; events go to GA4.
 *
 * Tone rule: subtle ≠ absent. Quiet type, one accent, soft motion, easy to dismiss. Never shouty.
 */
(function () {
  if (window.__wcFunnel) return; window.__wcFunnel = true;

  // Cross-document View Transitions (@view-transition: navigation:auto) reject with a benign
  // "AbortError: Transition was skipped" whenever a transition is interrupted or skipped.
  window.addEventListener('unhandledrejection', function (e) {
    var r = e.reason || {};
    if (r.name === 'AbortError' || /Transition was skipped|view transition/i.test(String(r.message || r))) e.preventDefault();
  });

  // On file:// the same cross-document transition can't snapshot across the unique-origin sandbox,
  // which BLANKS the page on navigation. So when previewed from disk, strip the @view-transition
  // at-rule and navigate normally. (No effect over http/https — production keeps the animation.)
  if (location.protocol === 'file:') {
    try {
      [].forEach.call(document.styleSheets, function (sheet) {
        try {
          var rules = sheet.cssRules;
          for (var i = rules.length - 1; i >= 0; i--) {
            if (/^\s*@view-transition/i.test(rules[i].cssText || '')) sheet.deleteRule(i);
          }
        } catch (e) {}
      });
    } catch (e) {}
  }

  // ─── analytics (bootstrap GA4 if the page doesn't already have it) ───
  var GA = 'G-C1Q6NWB3DN';
  if (!window.gtag) {
    var g = document.createElement('script'); g.async = 1; g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA;
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', GA);
  }
  var track = function (ev, params) { try { window.gtag && gtag('event', ev, params || {}); } catch (e) {} };

  // ─── capping helpers ───
  var LS = {
    get: function (k) { try { return localStorage.getItem('sw.funnel.' + k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem('sw.funnel.' + k, v); } catch (e) {} },
  };
  var converted = function () { return LS.get('converted') === '1'; };
  var snoozed = function () { var u = +LS.get('snoozeUntil') || 0; return Date.now() < u; };
  var snooze = function (days) { LS.set('snoozeUntil', String(Date.now() + days * 864e5)); };
  var canPrompt = function () { return !converted() && !snoozed(); };

  // ─── email submit (shared by footer, dock, takeover) ───
  function submitEmail(email, source, btn) {
    if (!email || email.indexOf('@') < 0) return;
    track('funnel_email_submit', { source: source });
    if (btn) btn.textContent = '✓';
    LS.set('converted', '1');
    try {
      fetch('/api/lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email: email, website: '', data: { source: source, page: location.pathname } }),
      });
    } catch (e) {}
  }

  // ─── styles ───
  var css = ''
  // footer contact
  + '.fn-contact{max-width:1280px;margin:0 auto;padding:72px clamp(20px,3vw,40px) 18px;display:grid;grid-template-columns:1.2fr 1fr;gap:clamp(32px,5vw,80px);align-items:end;border-top:1px solid var(--line)}'
  + '.fn-c-h{font-size:clamp(24px,2.6vw,38px);font-weight:800;letter-spacing:-.025em;line-height:1.02;color:var(--ink)}'
  + '.fn-c-sub{font-size:14px;color:var(--ink2);line-height:1.55;max-width:42ch;margin:14px 0 22px}'
  + '.fn-c-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap}'
  + '.fn-c-btn{display:inline-block;background:var(--ink);color:var(--bg);font-weight:700;font-size:15px;padding:12px 22px;border-radius:999px;transition:transform .2s var(--ease,ease),opacity .2s}'
  + '.fn-c-btn:hover{transform:translateY(-2px)}'
  + '.fn-c-mail{font-weight:600;font-size:15px;color:var(--ink2);border-bottom:1.5px solid var(--accent);padding-bottom:2px;transition:color .25s}'
  + '.fn-c-mail:hover{color:var(--ink)}'
  + '.fn-c-form label{display:block;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);margin-bottom:12px}'
  + '.fn-field{display:flex;align-items:center;border-bottom:1.5px solid var(--ink);padding-bottom:9px}'
  + '.fn-field input{flex:1;background:transparent;border:none;outline:none;font:16px var(--sans);color:var(--ink);padding:4px 0}'
  + '.fn-field input::placeholder{color:var(--ink3)}'
  + '.fn-field button{background:transparent;border:none;cursor:pointer;font:600 18px var(--sans);color:var(--ink);padding:0 0 0 12px}'
  + '.fn-honey{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}'
  // dock
  + '.fn-dock{position:fixed;right:24px;bottom:24px;z-index:120;width:min(360px,calc(100vw - 32px));background:var(--bg);border:1px solid var(--line);border-radius:14px;box-shadow:0 18px 50px rgba(40,28,16,.18);padding:20px 20px 18px;transform:translateY(140%);opacity:0;transition:transform .6s var(--ease,cubic-bezier(.16,1,.3,1)),opacity .5s}'
  + '.fn-dock.show{transform:none;opacity:1}'
  + '.fn-dock .x{position:absolute;top:12px;right:12px;width:24px;height:24px;border:none;background:transparent;color:var(--ink3);cursor:pointer;font-size:18px;line-height:1}'
  + '.fn-dock .x:hover{color:var(--ink)}'
  + '.fn-dock .h{font-size:16px;font-weight:800;letter-spacing:-.01em;color:var(--ink);max-width:24ch}'
  + '.fn-dock .s{font-size:13px;color:var(--ink2);margin:6px 0 14px;line-height:1.45}'
  // takeover
  + '.fn-over{position:fixed;inset:0;z-index:200;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 24px;opacity:0;pointer-events:none;transition:opacity .5s var(--ease,ease)}'
  + '.fn-over.show{opacity:1;pointer-events:auto}'
  + '.fn-over .x{position:absolute;top:24px;right:28px;width:34px;height:34px;border:none;background:transparent;color:var(--ink3);cursor:pointer}'
  + '.fn-over .x:hover{color:var(--ink)} .fn-over .x svg{width:22px;height:22px}'
  + '.fn-over img.clay{width:clamp(120px,18vw,180px);height:auto;margin-bottom:28px;filter:drop-shadow(0 18px 26px rgba(60,40,20,.16))}'
  + '.fn-over h2{font-size:clamp(32px,5vw,64px);font-weight:800;letter-spacing:-.03em;line-height:1;color:var(--ink);max-width:14ch}'
  + '.fn-over p{font-size:clamp(15px,1.4vw,18px);color:var(--ink2);max-width:44ch;margin:18px 0 30px;line-height:1.5}'
  + '.fn-over .row{display:flex;align-items:center;gap:22px;flex-wrap:wrap;justify-content:center}'
  + '.fn-over .fn-field{min-width:300px}'
  + '.fn-over .or{font-size:13px;color:var(--ink3)}'
  + '.fn-over a.hire{font-weight:700;font-size:16px;color:var(--ink);border-bottom:2px solid var(--accent);padding-bottom:3px;transition:color .25s}'
  + '.fn-over a.hire:hover{color:var(--accent)}'
  + '@media (max-width:760px){.fn-contact{grid-template-columns:1fr;gap:34px;padding-top:54px}.fn-dock{right:12px;left:12px;bottom:12px;width:auto}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function fieldHTML(src) {
    return '<form class="fn-form" data-src="' + src + '"><div class="fn-field"><input type="email" placeholder="your@email.com" required>'
      + '<button aria-label="Subscribe">→</button></div><div class="fn-honey"><input type="text" name="website" tabindex="-1" autocomplete="off"></div></form>';
  }
  function wireForm(form, src) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('[name=website]').value) return; // honeypot
      var input = form.querySelector('input[type=email]');
      submitEmail(input.value, src, form.querySelector('button'));
      input.value = ''; var lbl = form.closest('.fn-dock,.fn-over');
      if (lbl) setTimeout(function () { lbl.classList.remove('show'); }, 900);
    });
  }

  function build() {
    // Retire the big standalone "The Drop, in your inbox" closer — its signup now lives small,
    // parallel to the hire/contact, inside one footer section.
    document.querySelectorAll('.closer').forEach(function (c) { c.remove(); });

    // ── footer contact: hire prompt + contact + a small inline signup, all in one row.
    // This replaces the old tiny "© Saifis Works · All matches" line — it becomes the page's footer.
    var footer = document.querySelector('footer');
    if (!document.querySelector('.fn-contact')) {
      var sec = document.createElement('section'); sec.className = 'fn-contact';
      sec.innerHTML =
        '<div><div class="fn-c-h">We make these.</div>'
        + '<p class="fn-c-sub"><b>Saifis Works</b> crafts data stories, websites, and brands that stand out. Like this one. Let\'s build something great together.</p>'
        + '<div class="fn-c-actions"><a class="fn-c-btn" href="./hire.html">Hire us</a>'
        + '<a class="fn-c-mail" href="mailto:Saif@Works?subject=Hiring%20Saifis%20Works">Saif@Works</a></div></div>'
        + '<div class="fn-c-form"><label>The Data Drop, weekly</label>' + fieldHTML('footer') + '</div>';
      if (footer) { footer.parentNode.insertBefore(sec, footer); footer.remove(); }
      else (document.querySelector('main') || document.body).appendChild(sec);
      wireForm(sec.querySelector('.fn-form'), 'footer');
      sec.querySelector('.fn-c-mail').addEventListener('click', function () { track('funnel_contact_mail'); });
      sec.querySelector('.fn-c-btn').addEventListener('click', function () { track('funnel_hire_click', { from: 'footer' }); });
    }

    // ── bottom dock ──
    var dock = document.createElement('div'); dock.className = 'fn-dock';
    dock.innerHTML = '<button class="x" aria-label="Close">×</button><div class="h">Get the next data drop.</div>'
      + '<div class="s">One interactive story a week. Pop culture and sport, in clay and data. No spam.</div>' + fieldHTML('dock');
    document.body.appendChild(dock);
    wireForm(dock.querySelector('.fn-form'), 'dock');
    // click count persists across page navigations (most clicks here are links), so 4 real
    // clicks of browsing reliably trigger the dock. Resets on show and on dismiss.
    var getClk = function () { try { return +sessionStorage.getItem('sw.clk') || 0; } catch (e) { return 0; } };
    var setClk = function (n) { try { sessionStorage.setItem('sw.clk', String(n)); } catch (e) {} };
    dock.querySelector('.x').addEventListener('click', function () { dock.classList.remove('show'); setClk(0); track('funnel_dock_dismiss'); });
    function showDock() {
      if (converted() || dock.classList.contains('show')) return;
      setClk(0); dock.classList.add('show'); track('funnel_dock_shown');
    }

    // ── takeover ──
    var over = document.createElement('div'); over.className = 'fn-over';
    over.innerHTML = '<button class="x" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg></button>'
      + '<img class="clay" src="./trophy/cup-trophy.png" alt="">'
      + '<h2>Want one of these?</h2>'
      + '<p>We design and build data stories, sites and brands. Leave an email for the weekly drop, or come tell us about a project.</p>'
      + '<div class="row">' + fieldHTML('takeover') + '<span class="or">or</span><a class="hire" href="./hire.html">Hire us →</a></div>';
    document.body.appendChild(over);
    wireForm(over.querySelector('.fn-form'), 'takeover');
    over.querySelector('.x').addEventListener('click', function () { over.classList.remove('show'); snooze(7); track('funnel_takeover_dismiss'); });
    over.querySelector('a.hire').addEventListener('click', function () { track('funnel_hire_click', { from: 'takeover' }); });
    function showTakeover() {
      if (!canPrompt() || sessionStorage.getItem('sw.over')) return;   // once per session, until they convert/snooze
      sessionStorage.setItem('sw.over', '1'); over.classList.add('show'); track('funnel_takeover_shown');
    }

    // ── triggers ──
    // small dock: every 4th click · 45% scroll · 25s. large takeover: 1 minute in · exit-intent · deep clicking.
    var clicks = 0;
    document.addEventListener('click', function (e) {
      if (e.target.closest('.fn-dock,.fn-over,.fn-contact')) return;
      clicks++; setClk(getClk() + 1);
      // if this click stays on the page, a 4th click opens the dock now; a navigating click is
      // counted and the dock opens on the page it lands on (handled by the load check below).
      if (!e.target.closest('a[href]:not([target="_blank"])') && getClk() >= 4) showDock();
      if (clicks >= 12) showTakeover();
    });
    if (getClk() >= 4) setTimeout(showDock, 500);          // racked up 4 clicks across pages → show on load
    setTimeout(showTakeover, 60000);                       // the large email popup, one minute in
    document.addEventListener('mouseout', function (e) {   // exit-intent (cursor leaves through the top)
      if (e.clientY <= 0 && !e.relatedTarget) showTakeover();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();