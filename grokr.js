// ==UserScript==
// @name        grokr
// @namespace   http://hayageek.com
// @include     *x.com/i/grok*
// @version     1
// ==/UserScript==

console.log("Grokr awaiting...");

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

const DEF_DELAY = 1000;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
}

function setNativeValue(element, value) {
  let lastValue = element.value;
  element.value = value;
  let event = new Event("input", { target: element, bubbles: true });
  // React 15
  event.simulated = true;
  // React 16
  let tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}

waitForElm("textarea").then(async (e) => {
  const queryParams = window.location.search;
  if (queryParams) {
    const prompt = queryParams.substring(3).replaceAll("+", " ");
    await sleep(2000);
    setNativeValue(e, prompt);
    const btn = document.querySelector('[aria-label="Grok something"]');
    await sleep(2000);
    btn.click();
  }
});
