browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

function afterNavigate() {
    var locationArr = window.location.pathname.split("/")
    if (locationArr.includes("r") || locationArr.includes("user")) {
        window.location.href = `reddit://${window.location.pathname}`
    }
}

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
        afterNavigate();
    }
}, true);
// After page load
afterNavigate();

