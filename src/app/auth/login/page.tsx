import {GithubIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {createServerAction} from "@/lib/supabase/serverAction";
import {redirect} from "next/navigation";
import {headers} from "next/headers";

export default function Page() {

    const signIn = async () => {
        'use server'
        const origin = headers().get('origin');
        const supabase = createServerAction();
        const {error, data} = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${origin}/auth/callback`
            }
        });

        if (error) console.log(error);
        else return redirect(data.url);
    }

    return <div className='w-full min-h-screen flex items-center justify-center'>
        <form action={signIn}>
            <Button className='flex gap-4'
                    variant={'secondary'}
                    type='submit'>
                Login With Github <GithubIcon/>
            </Button>
        </form>
    </div>
}