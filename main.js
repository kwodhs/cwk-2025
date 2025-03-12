function showSection(sectionId) {
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function init() {
    showSection('about');
    initPlayer();
}