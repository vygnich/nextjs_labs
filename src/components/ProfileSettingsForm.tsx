'use client';

import {AuthSession} from "@/modules/types";
import {useValidatedForm} from "@/modules/hooks/FormValidation";
import {insertUserParams, updateUserParams, User} from "@/modules/schema/account";
import {UserUpdateAction} from "@/modules/server/userActions";


export function ProfileSettingsForm({session}: { session: AuthSession['session']; }) {
    const {
        errors, hasErrors, setErrors, handleChange,
    } = useValidatedForm<User>(insertUserParams);
    const handleSubmit = async (data: FormData) => {
        const payload = Object.fromEntries(data.entries());
        const productParsed = await insertUserParams.safeParseAsync({ ...payload });
        const values = productParsed.data;

        try {
            const formData = { ...values, id: session?.user.id! }
            await UserUpdateAction(formData)

        }catch (e) {
            console.log(e)
        }
    }
    return (
        <form onChange={handleChange} action={handleSubmit} className="space-y-8">
            {/* Schema fields start */}
            <div>
                <div
                >
                    Name
                </div>
                <input
                    type="text"
                    name="name"
                    className={"text-black"}
                    defaultValue={session?.user.name}
                />
            </div>
            <div>
                <div
                >
                    Role
                </div>
                <input
                    type="text"
                    name="image"
                    className={"text-black"}
                    defaultValue={session?.user.image}
                />
            </div>
            {/* Schema fields end */}
            <button>Save</button>
        </form>
    );
}