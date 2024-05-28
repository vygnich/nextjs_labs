'use client';

import { signOut } from "next-auth/react"


export default function SignOutBtn() {
    return (
        <button type="button" onClick={() => {
            signOut()
        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Sign out
        </button>
    );
}