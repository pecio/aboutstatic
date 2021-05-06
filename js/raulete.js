var titledd = false;
var langdd = false;

function titletoggle() {
    titledd = !titledd;
    document.getElementById("titlecontent").style.display = (titledd) ? 'block' : 'none';
}

function langtoggle() {
    langdd = !langdd;
    document.getElementById("langcontent").style.display = (langdd) ? 'block' : 'none';
}