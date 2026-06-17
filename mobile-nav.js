/* mobile-nav.js — the shared phone layer for every WC page.
 * Fixes two classes of problem on phones (<=720px):
 *   1. NAV: there was no way to reach other pages. We hide the desktop inline nav and add a
 *      hamburger -> full-screen menu, built from a fixed link set so it works on EVERY page
 *      (index has no .top-right; detail pages do). One include, every page navigable.
 *   2. OVERFLOW: the hero wordmark, the clay trophy (420px floor), the breadcrumb trail and the
 *      4-up "By the numbers" grid all spilled past the viewport. We constrain each below.
 * One <script src="./mobile-nav.js"> per page.
 */
(function () {
  if (window.__wcMobileNav) return; window.__wcMobileNav = true;

  var LINKS = [
    ['./index.html', 'Home'],
    ['./stadiums.html', 'Stadiums'],
    ['./teams.html', 'Teams'],
    ['./matches.html', 'Matches'],
    ['./standings.html', 'Standings'],
    ['./live.html', 'Analysis']
  ];

  var css = '' +
    '@media (max-width:720px){' +
    '  .top-nav{display:none!important}' +
    '  .mnav-burger{display:inline-flex!important}' +
    /* the "Pick your team / venue" search collapses to a round icon button on phones */
    '  .jump-trigger{font-size:0!important;gap:0!important;padding:0!important;border-radius:50%!important;width:36px!important;height:36px!important;justify-content:center!important}' +
    '  .jump-trigger kbd{display:none!important}' +
    '  .jump-trigger svg{width:16px!important;height:16px!important}' +
    /* breadcrumb trail can't fit a phone without colliding with the pager; the burger menu + ' +
       browser back cover navigation, so hide it here */
    '  .crumbs{display:none!important}' +
    '  .top-right{gap:6px!important}' +
    '  #shareBtn{display:none!important}' +
    '  .nav-counter{font-size:12px!important;white-space:nowrap}' +
    /* index hero: wordmark wraps + shrinks, trophy loses its desktop floor */
    '  .hero-wc-text{font-size:clamp(40px,15vw,74px)!important;white-space:normal!important;width:92vw!important;text-align:center!important;line-height:.9!important}' +
    '  .hero-trophy{width:min(78vw,420px)!important}' +
    /* "By the numbers" 4-up -> 2x2 so it stops running off screen */
    '  .numbers-grid{grid-template-columns:repeat(2,1fr)!important;gap:30px 22px!important}' +
    /* NOTE: do NOT add overflow-x:hidden on html/body here — it silently breaks the
       position:sticky album-stage on the teams/stadiums pages. Fix overflow at the source. */
    '}' +
    /* PHONE ALBUM: the desktop sticky-scroll album (text-left / clay-center / label-right) is
       wrong on a phone — text overlaps the clay, and the giant "Teams/Stadiums" label is noise.
       Below 768px we un-stick the whole thing into a plain vertical scroll: one clay per card with
       its name underneath. No translate, no floating text panel, no section label. */
    '@media (max-width:768px){' +
    '  .album{height:auto!important}' +
    '  .album-stage{position:static!important;height:auto!important;display:block!important;overflow:visible!important;padding:0!important;gap:0!important}' +
    '  .album-left,.album-right{display:none!important}' +
    '  .album-center{width:100%!important;height:auto!important;overflow:visible!important}' +
    '  .home-stack,.stadium-stack{position:static!important;transform:none!important;top:auto!important;left:auto!important;width:100%!important;display:block!important;gap:0!important;padding:0!important}' +
    '  .home-card,.stadium-card{position:relative!important;width:100%!important;height:auto!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;padding:5.5vh 24px!important;margin:0!important}' +
    '  .home-card img,.stadium-card img{width:72vw!important;max-width:330px!important;height:auto!important;max-height:44vh!important}' +
    '  .stadium-card .view-cue{display:none!important}' +
    '  .card-cap{display:flex!important}' +
    '}' +
    '.card-cap{display:none;flex-direction:column;align-items:center;gap:4px;margin-top:18px}' +
    '.card-cap .cc-name{font-weight:700;font-size:24px;letter-spacing:-.012em;color:var(--ink);text-align:center;line-height:1.12}' +
    '.card-cap .cc-sub{font-weight:500;font-size:15px;color:var(--ink2)}' +
    '.mnav-burger{display:none;width:32px;height:32px;align-items:center;justify-content:center;' +
    '  background:transparent;border:none;cursor:pointer;color:var(--ink2);padding:0;margin-right:2px}' +
    '.mnav-burger.mnav-fixed{position:fixed;top:26px;right:74px;z-index:40}' +
    '.mnav-burger:hover{color:var(--ink)} .mnav-burger svg{width:21px;height:21px}' +
    '.mnav-overlay{position:fixed;inset:0;z-index:300;background:var(--bg);display:flex;flex-direction:column;' +
    '  align-items:center;justify-content:center;gap:4px;opacity:0;pointer-events:none;' +
    '  transition:opacity .3s var(--ease,ease)}' +
    '.mnav-overlay.open{opacity:1;pointer-events:auto}' +
    '.mnav-overlay a{font-weight:800;font-size:clamp(30px,9vw,44px);letter-spacing:-.025em;color:var(--ink2);' +
    '  padding:7px 0;transition:color .2s var(--ease,ease)}' +
    '.mnav-overlay a:hover,.mnav-overlay a.current{color:var(--ink)}' +
    '.mnav-overlay a.current{color:var(--accent)}' +
    '.mnav-close{position:absolute;top:22px;right:26px;width:34px;height:34px;background:transparent;border:none;' +
    '  cursor:pointer;color:var(--ink2)} .mnav-close:hover{color:var(--ink)} .mnav-close svg{width:22px;height:22px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var BURGER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="3" y1="19" x2="21" y2="19"/></svg>';
  var CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>';

  function build() {
    var burger = document.createElement('button');
    burger.className = 'mnav-burger'; burger.setAttribute('aria-label', 'Menu'); burger.innerHTML = BURGER;

    // hamburger goes in the top-right corner (last in the cluster) when there is one;
    // otherwise pin it next to the theme toggle (index has no .top-right)
    var topRight = document.querySelector('.top-right');
    if (topRight) { burger.style.marginRight = '0'; burger.style.marginLeft = '2px'; topRight.appendChild(burger); }
    else { burger.classList.add('mnav-fixed'); document.body.appendChild(burger); }

    var here = location.pathname.replace(/.*\//, '') || 'index.html';
    var overlay = document.createElement('div'); overlay.className = 'mnav-overlay';
    var html = '<button class="mnav-close" aria-label="Close">' + CLOSE + '</button>';
    LINKS.forEach(function (l) {
      var file = l[0].replace('./', '');
      var cur = (file === here) ? ' class="current"' : '';
      html += '<a href="' + l[0] + '"' + cur + '>' + l[1] + '</a>';
    });
    overlay.innerHTML = html; document.body.appendChild(overlay);

    function close() { overlay.classList.remove('open'); document.body.style.overflow = ''; }
    burger.addEventListener('click', function () { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; });
    overlay.querySelector('.mnav-close').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();