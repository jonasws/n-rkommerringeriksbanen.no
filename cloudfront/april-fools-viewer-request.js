// CloudFront Function – Viewer Request
// Rewrites requests for the root to the April Fools page on 1 April 2026 (Norway local time).
//
// Deploy as a CloudFront Function on the Viewer Request event for your distribution.
// Associate it with the default cache behaviour (path pattern: *).
//
// Norway observes CEST (UTC+2) in April, so "1 April in Norway" spans:
//   2026-03-31T22:00:00Z  →  2026-04-01T21:59:59Z
//
// The function rewrites / and /index.html to /april-fools/index.html during
// that window. All other paths (assets, /om, etc.) are left untouched.

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Only intercept requests for the root document.
    if (uri !== "/" && uri !== "/index.html") {
        return request;
    }

    var now = new Date();
    var y    = now.getUTCFullYear();
    var mon  = now.getUTCMonth();   // 0-indexed: 2 = March, 3 = April
    var d    = now.getUTCDate();
    var h    = now.getUTCHours();

    // April 1 CEST = 2026-03-31 22:00 UTC  through  2026-04-01 21:59 UTC
    var isAprilFoolsNorway = (
        y === 2026 && (
            (mon === 2 && d === 31 && h >= 22) ||   // 31 Mar from 22:00 UTC
            (mon === 3 && d === 1  && h <  22)       // 1 Apr until 21:59 UTC
        )
    );

    if (isAprilFoolsNorway) {
        request.uri = "/april-fools/index.html";
    }

    return request;
}
