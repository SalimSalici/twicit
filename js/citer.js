(function () {

    var chatInput;
    var observer = new MutationObserver(processMutations);

    function init() {

        var chat = document.getElementsByClassName("chat-lines")[0];
        chatInput = document.getElementsByClassName("chat_text_input form__input")[0];
        
        if (chat === undefined || chatInput === undefined) {
            setTimeout(init, 500);
            return;
        }

        observer.observe(chat, {childList: true});

    }

    function processMutations(mutations) {

        for (var i = 0; i < mutations.length; i++) {

            var currentNodes = mutations[i].addedNodes;

            for (var j = 0; j < currentNodes.length; j++) {
                var node = currentNodes[j];
                
                if (node.nodeName == "LI" && node.className == "message-line chat-line ember-view")
                    processComment(node);
            }

        }

    }

    function processComment(comment) {
        var commentAuthor = comment.getElementsByClassName("from")[0].innerHTML;
        var arrowBtnCopy = arrowBtn.cloneNode(true);
        arrowBtnCopy.setAttribute("data-author", commentAuthor);

        arrowBtnCopy.addEventListener("click", function () {
            chatInput.value += "@" + arrowBtnCopy.getAttribute("data-author");
        });

        comment.insertBefore(arrowBtnCopy, comment.firstElementChild);
    } 

    var arrowBtn = document.createElement("DIV");
    arrowBtn.className = "twc-citeExtension";

    var arrowImgDark = document.getElementById("twc-citeExtensionImageDark").cloneNode(true);
    arrowImgDark.className = "twc-arrowImgDark";
    arrowImgDark.style.display = "block";

    var arrowImgLight = document.getElementById("twc-citeExtensionImageLight").cloneNode(true);
    arrowImgLight.className = "twc-arrowImgLight";
    arrowImgLight.style.display = "block";

    arrowBtn.appendChild(arrowImgLight);
    arrowBtn.appendChild(arrowImgDark);

    setTimeout(init, 500);

})();
