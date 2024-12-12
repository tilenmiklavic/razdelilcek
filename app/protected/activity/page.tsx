import { createClient } from "@/utils/supabase/server";

export default async function Activity() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();


    return (
        <div>Activity</div>
    )
}
