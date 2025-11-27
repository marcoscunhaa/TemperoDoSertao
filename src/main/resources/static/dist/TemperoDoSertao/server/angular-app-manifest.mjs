
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
    'index.csr.html': {size: 5363, hash: 'aa45e3041446e2f4a1b4a0b2a753ca7b4ac8c2fd6653129843cb5fe945766c7e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1335, hash: '1ba387e4257c3f1b212244eefa0f32ea9d074e00c8e8b9252b25b97b27a8cc40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5410, hash: '7622a569348275e14deb9d990e03adc64e35e2c84a7760b67700962c761f98da', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HR6D4WJL.css': {size: 315730, hash: 'q9j6xvPSaNQ', text: () => import('./assets-chunks/styles-HR6D4WJL_css.mjs').then(m => m.default)}
  },
};
