chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Block requests to any filtering-related domain
    if (details.url.includes('securly.com') || details.url.includes('goguardian.com') || details.url.includes('lanschool.com') || details.url.includes('linewize.com') || details.url.includes('blocksi.net') || details.url.includes('fortinet.com') || details.url.includes('cisco.com') || details.url.includes('imperosoftware.com') || details.url.includes('hapara.com') || details.url.includes('iboss.com') || details.url.includes('lightspeedsystems.com') || details.url.includes('cdw.com') || details.url.includes('mobileguardian.com') || details.url.includes('imtlazarus.com') || details.url.includes('backdrop.cloud')) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },  // Match all URLs
  ["blocking"]
);
