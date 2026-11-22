import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = "https://kkiipqwmwgfmyidkadtd.supabase.co";
const supabasekey = "sb_publishable_P4yiB295fgMtynpodMzSFQ_EATniVWE";

const supabase = createClient(supabaseUrl, supabasekey);

async function checkAuth() {
    const {data:{session},error} = await supabase.auth.getSession();

    if (error || !session) {
        window.location.replace("/auth/");
        return;
    }
}

checkAuth()