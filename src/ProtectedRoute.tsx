

import type { JSX } from "react/jsx-dev-runtime";
import { supabase } from "./lib/supabase-client";
import { useNavigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: JSX.Element }) {
 const navigate  = useNavigate();
 const fetchSession = async () => {
 const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    return user;
 }
    const user = fetchSession();

    if(!user){
        navigate("/signup");
        return null;
    }
    return children;

}