'use server';

import {ProfileBlock} from '@/components/profile/ProfileBlock';
import {getCurrentUser} from '@/lib/api/users/queries';
import SellerForm from "@/components/auth/SellerForm";
import {UserRole} from "@prisma/client";

export default async function ProfilePage() {
    const {user} = await getCurrentUser();
    return (
        <>
            <ProfileBlock user={user!}/>
            {user?.role == UserRole.USER &&
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <SellerForm/>
                    </div>
                </div>
            }
        </>
    );
}
