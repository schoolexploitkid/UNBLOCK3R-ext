async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
// code for LTBEEF execution
if (ltbeef && window.location.href == "chrome://extensions") {
  chrome.scripting.executeScript({tabs: getCurrentTab(), files: ["ltbeef.js"]});
  console.log('LTBEEF executed');
}
// code for reload
if (reload) {
  chrome.tabs.forEach((tab) => (window.location.reload(); console.log("Tab Reloaded");));
  reload = false;
}
// 
