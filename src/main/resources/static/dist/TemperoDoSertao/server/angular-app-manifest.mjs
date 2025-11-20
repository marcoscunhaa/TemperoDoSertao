
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5363, hash: '984360540930b556a38c7a6ae0dafd6c541df07c4b24e058336b78828836799a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1335, hash: 'e9679a0304077e686b5437a71c3b28c9e8a60654a2e811930921f1841c842265', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5410, hash: 'ef11ee4be1e88ad33c1b035f66ff76fbb7b1363a139b93b36841d9c8a8dcbd73', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HR6D4WJL.css': {size: 315730, hash: 'q9j6xvPSaNQ', text: () => import('./assets-chunks/styles-HR6D4WJL_css.mjs').then(m => m.default)}
  },
};
