import { redirect } from "next/navigation";
import { auth } from "./auth";

export default async function verifyUserSession() {

    const session = await auth()

    if (!session?.user) {
        redirect('/login')
    }

    return session

}