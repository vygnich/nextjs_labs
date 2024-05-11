'use client';

import { useRouter } from 'next/navigation';

export default function SignOutBtn() {
    const router = useRouter();
    const handleSignOut = async () => {
        const response = await fetch('/api/sign-out', {
            method: 'POST',
            redirect: 'manual',
        });

        if (response.status === 0) {
            return router.refresh();
        }
    };
    return (
        <button type="button" onClick={handleSignOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Sign out
        </button>
    );
}