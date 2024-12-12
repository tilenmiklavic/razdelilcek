import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
    const supabase = await createClient();

    const { data, error, status } = await supabase.from("groups").select();

    console.log(data);

    console.log(data?.at(0).id);

    return (
        <>
            <Hero />
            <main className="flex-1 flex flex-col gap-6 px-4">
                <h2 className="font-medium text-xl mb-4">Next steps</h2>
                {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}

                {data?.at(0).id}
            </main>
        </>
    );
}
