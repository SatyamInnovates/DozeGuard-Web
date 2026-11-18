document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".how-it-works");
    if (!section) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const steps = section.querySelector(".steps")
                steps.classList.add("active");  
                steps.querySelectorAll(".step").forEach(step => {
                    step.classList.add("show");
                });

                observer.unobserve(section);
            }
        });
    }, {threshold: 0.2});
    observer.observe(section);}
);


