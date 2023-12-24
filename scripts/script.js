document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("show");
    } else {
        menu.classList.add("hidden");
        menu.classList.remove("show");
    }
});


document.getElementById('toggleLang').addEventListener('click', function() {
    let currentLang = document.querySelector('.lang-content:not([style*="display: none"])').getAttribute('data-lang');
    
    if (currentLang === 'es') {
        document.querySelector('.lang-content[data-lang="es"]').style.display = 'none';
        document.querySelector('.lang-content[data-lang="en"]').style.display = 'block';
    } else {
        document.querySelector('.lang-content[data-lang="es"]').style.display = 'block';
        document.querySelector('.lang-content[data-lang="en"]').style.display = 'none';
    }
});


