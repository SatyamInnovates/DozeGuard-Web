import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = "https://kkiipqwmwgfmyidkadtd.supabase.co";
const supabasekey = "sb_publishable_P4yiB295fgMtynpodMzSFQ_EATniVWE";

const supabase = createClient(supabaseUrl, supabasekey);

const userMenu = document.getElementById("user-menu");
const userIcon = document.getElementById("user-icon");
const userDropdown = document.getElementById("user-dropdown");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");


async function checkUser() {
    const { data : {session}} = await supabase.auth.getSession();

    if (session){
        userMenu.style.display = "block";
        userEmail.textContent = session.user.email;
    } else {
        userMenu.style.display = "none";
    }
}
checkUser()

supabase.auth.onAuthStateChange((event, session) => {

    if (session) {
        userMenu.style.display = "block";
        userEmail.textContent = session.user.email;
    } else {
        userMenu.style.display = "none";
    }

});

userIcon.addEventListener("click", () => {
    userDropdown.classList.toggle("active");
});


logoutBtn.addEventListener("click", async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error(error.message);
        return;
    }

    window.location.href = "/";
});

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

        icon.setAttribute("data-lucide", isOpen ? "plus" : "minus");

        lucide.createIcons();
    });
    lucide.createIcons();
})

