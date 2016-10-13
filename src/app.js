(function () {
    function start() {
        play();
        continueCheating();
    }

    function play() {
        $('#ulTreeList a[class!=haveClick]:first')[0].click();
    }

    function continueCheating() {
        setInterval(function () {
            if (!$('#dialog_content1').is(':hidden')) {
                checkOnline();
            }
        }, 3000);
    }

    window.endHandler = function () {
        $("#nyv").val(watchTime);
        $("#iptflag").val("0");
        clearwt();
        rc();
        $("#btnsavexs").attr("disabled", "disabled");
        CKobject.getObjectById('ckplayer_a1').videoClear();
        setTimeout(function () {
            play();
        }, 3000);
    };

    start();
})();