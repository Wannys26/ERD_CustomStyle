(function () {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    .erd-ads-area {
      display: none !important;
    }

    ins.adsbygoogle,
    .adsbygoogle {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      min-width: 0 !important;
      min-height: 0 !important;
    }

    .erd-container.erdWrap {
      width: 100% !important;
    }
  `;

  (document.documentElement || document.head || document.body).appendChild(style);
})();
