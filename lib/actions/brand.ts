import {updateBrandParams, UpdateBrandParams} from "@/lib/db/schema/brand";
import {updateBrand} from "@/lib/api/brand/mutations";

export const updateBrandAction = async (input: UpdateBrandParams) => {
    try {
        const payload = updateBrandParams.parse(input);
        await updateBrand(payload.id, input);
    } catch (e) {
        return handleErrors(e);
    }
};


const handleErrors = (e: unknown) => {
    const errMsg = 'Error, please try again.';
    if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
    if (e && typeof e === 'object' && 'error' in e) {
        const errAsStr = e.error as string;
        return errAsStr.length > 0 ? errAsStr : errMsg;
    }
    return errMsg;
};