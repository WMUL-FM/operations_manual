/* From Neo4j Documentation UI */
// external links
// link:https://example.com[text^] - add class external and aria-label (already has target="_blank")
// link:https://example.com[text] - do nothing
// links to other docs pages are not external
// link:https://marshall.edu/...[] - do nothing
// Adapted from https://github.com/neo4j-documentation/docs-ui/blob/12e48f6da4d7dc0d99f4f85f2f1b930ba4b12d56/src/js/14-external-links.js

;(function () {
  'use strict'
  const nonExternals = /example\.com/g
  document.querySelectorAll('.doc a[href^="http"], .doc a[target="_blank"]')
    .forEach(function (el) {
      if (document.location.hostname !== el.hostname && !el.hostname.match(nonExternals)) {
        el.classList.add('external')
      }

      if (el.target === '_blank') {
        el.setAttribute('aria-label', 'Link label (opens in new tab)')
      }
    })
})()
