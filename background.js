var ltbeef = false;
var reload = false;
var securlykill = false;
var DNSemulator = false;
// define function for getting tabs
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
  chrome.tabs.forEach((tab) => (function(){tab.window.location.reload(); console.log("Tab Reloaded");}));
  reload = false;
}
// code for DNS emulator
if (DNSemulator) {
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Block requests to any filtering-related domain, emulating DNS configuration
      if (details.url.includes('securly.com') || details.url.includes('goguardian.com') || details.url.includes('lanschool.com') || details.url.includes('linewize.com') || details.url.includes('blocksi.net') || details.url.includes('fortinet.com') || details.url.includes('cisco.com') || details.url.includes('imperosoftware.com') || details.url.includes('hapara.com') || details.url.includes('iboss.com') || details.url.includes('lightspeedsystems.com') || details.url.includes('cdw.com') || details.url.includes('mobileguardian.com') || details.url.includes('imtlazarus.com') || details.url.includes('backdrop.cloud')) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },  // Match all URLs
    ["blocking"]
  );
}
// code for securly block
if (securlyBlock) {
  chrome.tabs.forEach((tab) => (function (){if (tab.window.location.hostname == "https://securly.com") {chrome.scripting.executeScript({tabs:tab, files: ["securlykill.js"]})}}));
  console.log("Securly Successfully Killed.");
  securlyblock = false;
}
