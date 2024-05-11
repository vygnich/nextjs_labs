import { checkAuth, getUserAuth } from '@/modules/auth/auth';
import SignOutBtn from "@/components/SignOut";

export default async function Account() {
    await checkAuth();
    const session = await getUserAuth();
    return (
        <main>
            <h1 className="text-2xl font-semibold my-4">Account</h1>
            <div className="space-y-4">
                <pre>{JSON.stringify(session, null, 2) }</pre>
            </div>
            <SignOutBtn/>
        </main>
    );
}