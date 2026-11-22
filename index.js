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


const hero = document.querySelector('.hero');
const actions = document.querySelector('.actions');

actions.addEventListener('mouseenter', () => {
    hero.classList.add('curve-active');
});

actions.addEventListener('mouseleave', () => {
    hero.classList.remove('curve-active');
});


const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("i");

    answer.style.display = "none";

    question.addEventListener("click",() => {
        const isOpen = answer.style.display==="block";

        answer.style.display = isOpen ? "none" : "block";

        icon.setAttribute("data-include",isOpen ? "plus":"minus")
    });
    lucide.createIcons();
})

