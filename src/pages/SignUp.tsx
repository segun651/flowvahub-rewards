import { useState } from "react"
import { supabase } from "../lib/supabase-client"

export default function SignUp() {
    const[email,setEmail]=useState<string>("")  
    const[password,setPassword]=useState<string>("")    
    const[confirmPassword,setConfirmPassword]=useState<string>("")
    const[loading,setLoading]=useState<boolean>(false)
    const[errorMessage,setErrorMessage]=useState<string>("")
    const[showPassword,setShowPassword]=useState<boolean>(false)
    const[showConfirmPassword,setShowConfirmPassword]=useState<boolean>(false)

    async function signUpWithEmail(){
        setLoading(true)
        if(!email || !password || !confirmPassword){
            setErrorMessage("Please fill in all fields.")
            setLoading(false)
            return
        }
        if(password.length<6){
            setErrorMessage("Password must be at least 6 characters long.")
            setLoading(false)
            return
        }
        if(password!==confirmPassword){
            setErrorMessage("Passwords do not match.")
            setLoading(false)
            return
        }
       const{data,error} = await supabase.auth.signUp({
            email,
            password,
           
        })
      
        if(error){  
            setErrorMessage(error.message)
                setLoading(false)
        }

        
         else if (!error && data.user) {
  // Create the profile row
  await supabase.from('profiles').insert({
    id: data.user.id,
    points: 0,
    streak: 0,
    last_daily_claim: null,
  });
             alert("SignUp Successful")
        console.log(data)
            setErrorMessage("")
            setLoading(false)
        }
        
    }

    return (

        <div className="min-h-dvh flex justify-center py-5 px-3 items-center bg-linear-to-br from-[#9013fe] to-[#6D28D9]">

            <div className="flex justify-center w-full max-w-105 ">

                <div className="w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-7.5 px-5 lg:p-10 bg-white rounded-[10px] animate-fadeIn h-fit">

                    <div className=" mb-7.5">
                        <h1 className="text-2xl text-[#6D28D9] font-semibold  mb-2 text-center w-full  ">Create Your Account</h1>
                        <p className="text-sm text-[#6B7280] text-center w-full ">Sign up to manage your tools</p>
                    </div>

        {
            errorMessage &&
            <div className=" bg-red-500/10 text-[#EF4444] border-red-500/20   border p-3 rounded-md mb-5 text-[12px] flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><span>{errorMessage}</span>
                        </div>
        }
                    

                    <div className="w-full">
                        <form className="w-full text-[#111827]" onSubmit={(e)=>{
                            e.preventDefault()
                            signUpWithEmail()
                        }}>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#111827]">Email</label>
                            <div className="relative group w-full mb-5">
                            <input type="email" id="email" name="email" placeholder="your@email.com" className=" peer w-full border text-base py-2.75 px-3.5  border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]"  value={email} onChange={(e)=>setEmail(e.target.value)} required  />

                            <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                            </div>

                            <label htmlFor="password" className="block text-sm font-medium mb-2 text-[#111827]">Password</label>
                            <div className="relative mb-5">
                                <div className="relative group w-full ">
                                    <input type={showPassword ? "text" : "password"} id="password" minLength={6} name="password" placeholder="••••••••" className=" peer w-full border py-2.75 px-3.5 text-base  border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]" required  value={password} onChange={(e)=> setPassword(e.target.value)} />
                                <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                                </div>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto">{showPassword ? "Hide" : "Show"}</button>
                                </div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium mb-2 text-[#111827]">Confirm Password</label>
                                <div className="relative">
                                    <div className="relative group w-full mb-5">
                                        <input type={showConfirmPassword ? "text" : "password"} id="confirm-password" name="confirmPassword" placeholder="••••••••" minLength={6} className=" peer w-full border py-2.75 px-3.5 text-base  border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required  />
                                        <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                                        </div>
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto">{showConfirmPassword ? "Hide" : "Show"}</button>
                                        </div>
                                        <button type="submit" className="w-full text-base h-13.75  flex justify-center gap-2 items-center p-2.75 text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9]">{loading ? "Signing up..." : "Sign up Account"}</button>
                                        </form>
                                        
                                       

                    </div>
                </div>
            </div>
        </div>

    )
}