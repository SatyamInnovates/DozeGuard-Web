const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll(".step").forEach(step => {
                step.classList.add("show");
            });

            observer.unobserve(entry.target);
        }
    });
},{threshold: 0.25});

observer.observe(document.querySelector(".how-it-works"));