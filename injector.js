
var twc_script = document.createElement('script');
twc_script.src = chrome.extension.getURL('js/citer.js');
twc_script.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(twc_script);

var arrowImgDark = document.createElement("IMG");
arrowImgDark.id = "twc-citeExtensionImageDark";
arrowImgDark.src = chrome.extension.getURL('images/cite-arrow-dark.svg');
arrowImgDark.style.display = "none";
document.documentElement.appendChild(arrowImgDark);

var arrowImgLight = document.createElement("IMG");
arrowImgLight.id = "twc-citeExtensionImageLight";
arrowImgLight.src = chrome.extension.getURL('images/cite-arrow-light.svg');
arrowImgLight.style.display = "none";
document.documentElement.appendChild(arrowImgLight);
