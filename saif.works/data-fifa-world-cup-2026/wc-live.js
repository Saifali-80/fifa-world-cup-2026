/* ─────────────────────────────────────────────────────────────────────────
   wc-live.js — shared World Cup 2026 live-results fetcher.

   One FIFA call for the whole tournament, cached in sessionStorage (60s TTL),
   so every page (home, schedule, match, team) shows the same real scores
   without each one hammering the API. Standings keeps its own richer fetch.

   window.WCLive
     .load(force?) -> Promise<{t, map, finished, live}>   // resolves once data is in
     .get(n)       -> {h,a,hs,as,status,winner,hp,ap,group} | null
     .isFinished(n)-> bool   (status 0 = full time)
     .isLive(n)    -> bool   (status 3 = in progress)
     .all()        -> map
     .counts()     -> {finished, live}

   status codes (FIFA MatchStatus): 0 finished · 3 live · everything else upcoming.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  var FIFA = 'https://api.fifa.com/api/v3', COMP = '17', SEASON = '285023';
  var KEY = 'wc.live.v1', TTL = 60000;

  function locName(o) {
    if (!o) return null;
    if (Array.isArray(o)) { var e = o.find(function (x) { return x && x.Description; }); return e ? e.Description : null; }
    return o.Description || null;
  }

  var mem = null, inflight = null;

  function readCache() {
    try {
      var raw = sessionStorage.getItem(KEY);
      if (!raw) return null;
      var o = JSON.parse(raw);
      if (!o || (Date.now() - o.t) > TTL) return null;
      return o;
    } catch (e) { return null; }
  }

  function fetchNow() {
    var url = FIFA + '/calendar/matches?idCompetition=' + COMP + '&idSeason=' + SEASON +
      '&from=2026-06-10T00:00:00Z&to=2026-07-20T00:00:00Z&count=200&language=en';
    return fetch(url, { headers: { 'Accept': 'application/json' } }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (j) {
      var ms = j.Results || [];
      var map = {}, finished = 0, live = 0;
      ms.forEach(function (m) {
        var n = m.MatchNumber; if (!n) return;
        var h = locName(m.Home && m.Home.TeamName), a = locName(m.Away && m.Away.TeamName);
        var grp = (locName(m.GroupName) || '').replace(/^Group\s+/, '').trim();
        var winner = null;
        if (m.Winner) {
          if (m.Home && String(m.Home.IdTeam) === String(m.Winner)) winner = h;
          else if (m.Away && String(m.Away.IdTeam) === String(m.Winner)) winner = a;
        }
        if (m.MatchStatus === 0) finished++;
        if (m.MatchStatus === 3) live++;
        map[n] = {
          h: h, a: a, hs: m.HomeTeamScore, as: m.AwayTeamScore,
          status: m.MatchStatus, winner: winner,
          hp: m.HomeTeamPenaltyScore, ap: m.AwayTeamPenaltyScore,
          group: /^[A-L]$/.test(grp) ? grp : null
        };
      });
      return { t: Date.now(), map: map, finished: finished, live: live };
    });
  }

  function load(force) {
    if (!force) {
      var c = readCache();
      if (c) { mem = c; return Promise.resolve(c); }
      if (mem && (Date.now() - mem.t) <= TTL) return Promise.resolve(mem);
    }
    if (inflight) return inflight;
    inflight = fetchNow().then(function (o) {
      mem = o;
      try { sessionStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
      inflight = null;
      return o;
    }, function (err) { inflight = null; throw err; });
    return inflight;
  }

  var api = {
    load: load,
    get: function (n) { return (mem && mem.map && mem.map[n]) || null; },
    isFinished: function (n) { var r = api.get(n); return !!(r && r.status === 0); },
    isLive: function (n) { var r = api.get(n); return !!(r && r.status === 3); },
    all: function () { return mem ? mem.map : {}; },
    counts: function () { return mem ? { finished: mem.finished, live: mem.live } : { finished: 0, live: 0 }; }
  };
  window.WCLive = api;
})();
