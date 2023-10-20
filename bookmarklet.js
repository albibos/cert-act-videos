javascript:(function() {
    var table = document.getElementById("table-review");
    if (table) {
        var trs = table.getElementsByTagName("tr");
        var delay = 2 * 60 * 1000 + 30 * 1000;
        var i = 0;

        function clickButton() {
            if (i < trs.length) {
                var tr = trs[i];
                var videoBtn = tr.querySelector("i.fa.fa-play-circle.video-btn.video-i");

                if (videoBtn) {
                    videoBtn.click();
                    setTimeout(function() {
                        i++;
                        clickButtonAndNext();
                    }, delay);
                } else {
                    i++;
                    clickButtonAndNext();
                }
            }
        }

        clickButton();
    } else {
        alert("Table with id 'table-review' not found. Are you on the right page?");
    }
})();
