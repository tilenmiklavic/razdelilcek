import { createClient } from "@/utils/supabase/server";

export default async function Groups() {
    const supabase = await createClient();

    const userResponse = await supabase.auth.getUser()
    const userId = userResponse.data.user?.id

    const groupResponse = await supabase
        .from("groups")
        .select("*, group_user!inner(user_id)")
        .eq("group_user.user_id", userId);
        
    console.log(groupResponse)
    let foo = groupResponse.data?.at(0)

    return (
        <>
            <div>Groups</div>
            <div>{foo.name}</div>
        </>
    );
}
