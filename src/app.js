class Muzk6 {
    constructor(test = 0) {
        this.test = test;

        let instance = this;
        window.endHandler = function () {
            $("#nyv").val(watchTime);
            $("#iptflag").val("0");
            clearwt();
            rc();
            $("#btnsavexs").attr("disabled", "disabled");
            CKobject.getObjectById('ckplayer_a1').videoClear();
            setTimeout(() => instance.play(), 3000);
        };
    }

    start() {
        this.play();
        this.continueCheating();
    }

    play() {
        if (this.test) {
            change('1010201');
        } else {
            $('#ulTreeList a[class!=haveClick]:first')[0].click();
        }
    }

    continueCheating() {
        setInterval(() => {
            if (!$('#dialog_content1').is(':hidden')) {
                checkOnline();
            }
        }, 3000);
    }
}

let obj = new Muzk6();
obj.start();