
document.addEventListener('DOMContentLoaded', () => {

    const faBars = document.querySelector('.fa-bars');

    const navbar = document.querySelector('.navbar');

    const header = document.querySelector('header');

    const sections = document.querySelectorAll('section');

    const navLinks = document.querySelectorAll('.navbar ul li a');

    faBars.addEventListener('click', () => {
        faBars.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });

    window.addEventListener('scroll', () => {
        faBars.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');

        if (window.scrollY > 30) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }

        let windowTop = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 200;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute('id');

            if (windowTop >= sectionTop && windowTop < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                });
                document.querySelector('.navbar [href="#' + sectionId + '"]').classList.add('active');
            }
        });
    });

    window.addEventListener('load', () => {
        faBars.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');

        if (window.scrollY > 30) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }

        let windowTop = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 200;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute('id');

            if (windowTop >= sectionTop && windowTop < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                });
                document.querySelector('.navbar [href="#' + sectionId + '"]').classList.add('active');
            }
        });
    });
});
