import { checkAuth, getUserAuth } from '@/modules/auth/auth';
import SignOutBtn from "@/components/SignOut";
import {ProfileSettingsForm} from "@/components/ProfileSettingsForm";
import {AuthSession, Roles, RoleStatus} from "@/modules/types";
import SellerForm from "@/components/SellerForm";

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
            {
                session ?
                    <>
                        <ProfileSettingsForm session={session} />
                        {
                            session.user.role == Roles.USER ?
                                <SellerForm session={session}/>
                                :""
                        }

                    </>
                    :
                    ""
            }
        </main>
    );
}