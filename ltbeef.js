var a = prompt('Extension ID of extension to toggle. WARNING: You must enable flag extensions-on-chrome-urls, then execute this code on chrome://extensions');
var b = prompt('On or Off? ON (all caps) for on, and OFF (all caps) for off.');
var c = false;
if (b == "ON") {
  c = true;
} else if (b == "OFF") {
  c = false;
} else {
  c = false;
  b = "OFF";
  alert('On or off input is not valid. Defaulting to off.');
}
try {
  chrome.management.setEnabled(a, c);
  console.log('Extension ' + a + ' was turned ' + b + ' successfully.')
} catch (e) {
  alert('An error occured:' + e);
}
