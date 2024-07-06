const images = document.querySelectorAll('.first img')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
})

images.forEach(image => observer.observe(image))