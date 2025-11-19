var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className === 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

function generate() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;

    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    var block = document.getElementById('block');

    block.style.borderRadius =
        rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";

    document.getElementById("css_output").value =
        "border-radius: " + block.style.borderRadius + ";";
}

function generateZ() {
    var z = document.getElementById('z').value;
    document.getElementById('z_val').value = z;

    var front = document.getElementById('z_front');
    front.style.zIndex = z;

    document.getElementById("css_output_z").value =
        "z-index: " + z + ";";
}

function generateF() {
    var fg = document.getElementById('fg').value;
    var fs = document.getElementById('fs').value;
    var fb = document.getElementById('fb').value;

    document.getElementById('fg_val').value = fg;
    document.getElementById('fs_val').value = fs;
    document.getElementById('fb_val').value = fb + "px";

    var item = document.getElementById('flex_item');
    item.style.flex = fg + " " + fs + " " + fb + "px";

    document.getElementById("css_output_f").value =
        "flex: " + fg + " " + fs + " " + fb + "px;";
}

