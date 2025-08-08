    const navbarLinks = document.querySelectorAll('.navbar__link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            navbarLinks.forEach(item => {
                item.classList.remove('navbar__link--active');
            });
            this.classList.add('navbar__link--active');
        });
    });
