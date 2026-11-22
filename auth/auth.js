import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = "https://kkiipqwmwgfmyidkadtd.supabase.co";
const supabasekey = "sb_publishable_P4yiB295fgMtynpodMzSFQ_EATniVWE";

const supabase = createClient(supabaseUrl, supabasekey);


const authForm = document.getElementById("auth-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const authSubmit = document.getElementById("auth-submit");
const toggleAuth = document.getElementById("toggle-auth");
const authMessage = document.getElementById("auth-message");

let islogin = true;


authForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    authSubmit.disabled = true;
    authMessage.textContent = "You are great :)";

    try {
        let result;

        if (islogin) {
            result = await supabase.auth.signInWithPassword({
                email, password
            });
        } else {
            result = await supabase.auth.signUp({
                email, password
            });
        }

        if (result.error) {
            authMessage.textContent = result.error.message;
            return;
        }

        if (islogin) {
            window.location.href = "/download/";
        } else {
            authMessage.textContent = "Damn! Account created.";
            window.location.href = "/download/";
        }

    } catch (error) {
        authMessage.textContent = error.message;

    } finally {
        authSubmit.disabled = false;
    }
});


toggleAuth.addEventListener("click", () => {

    islogin = !islogin;

    authSubmit.textContent = islogin ? "Log In" : "Sign Up";

    document.querySelector(".auth-header h1").textContent =
        islogin ? "Welcome" : "Create an account";

    document.querySelector(".auth-header p").textContent =
        islogin ? "Sign in to continue to DozeGuard" : "Sign up to get started with DozeGuard";

    toggleAuth.textContent = islogin ? "Sign up" : "Log In";

    authMessage.textContent = "";
});


