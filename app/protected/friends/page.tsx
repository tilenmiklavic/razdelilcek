import { createClient } from "@/utils/supabase/server";

export default async function Friends() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();


    return (
        <div>Friends</div>
    )
}
