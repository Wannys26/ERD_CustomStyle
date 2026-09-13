# ERDCloud Custom Style

ERDCloud에서 지정된 광고 영역을 숨기고 ERD 작업 영역을 화면 너비에 맞게 확장하는 간단한 도구입니다.

## 1. Chrome 확장 프로그램으로 사용

### 설치 방법

1. 이 저장소를 내려받습니다.
   - GitHub의 **Code → Download ZIP**을 선택하거나 `git clone`으로 받습니다.
2. Chrome 주소창에 `chrome://extensions`를 입력해 확장 프로그램 관리 화면을 엽니다.
3. 우측 상단의 **개발자 모드**를 켭니다.
4. **압축해제된 확장 프로그램을 로드**를 클릭합니다.
5. 내려받아 압축을 푼 저장소 폴더를 선택합니다. `manifest.json`이 들어 있는 폴더를 선택하면 됩니다.
6. `https://www.erdcloud.com/`을 새로고침합니다.

이 확장 프로그램은 `https://www.erdcloud.com/*`에서만 실행됩니다.

## 2. Tampermonkey 확장 프로그램으로 사용

1. Chrome 웹 스토어에서 [Tampermonkey](https://www.tampermonkey.net/)를 설치합니다.
2. Tampermonkey 대시보드에서 **새 스크립트 만들기**를 선택합니다.
3. 기본 내용을 모두 지우고 아래 코드를 붙여 넣습니다.
4. 저장한 뒤 ERDCloud 페이지를 새로고침합니다.

```javascript
// ==UserScript==
// @name         ERDCloud Custom Style
// @namespace    https://www.erdcloud.com/
// @version      1.0.0
// @description  Hides selected ERDCloud ad elements and expands the ERD area.
// @match        https://www.erdcloud.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

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
```

## 간단한 원리

- Chrome 확장 프로그램 또는 Tampermonkey가 ERDCloud 문서가 시작될 때 작은 `<style>` 태그를 주입합니다.
- `.erd-ads-area`, `ins.adsbygoogle`, `.adsbygoogle`에 `display: none !important`를 적용해 화면에 표시되지 않도록 합니다.
- 광고 요소가 남겨 둔 크기까지 줄이기 위해 `width`, `height`, `min-width`, `min-height`를 `0`으로 지정합니다.
- `.erd-container.erdWrap`에는 `width: 100% !important`를 적용해 ERD 영역이 전체 너비를 사용하도록 합니다.

이 도구는 페이지의 CSS만 변경하며, ERDCloud 서버의 데이터나 계정 정보를 변경하지 않습니다. 사이트의 이용약관과 광고 정책을 확인한 뒤 사용하세요.
