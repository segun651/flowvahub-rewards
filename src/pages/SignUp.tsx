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
            options:{
                emailRedirectTo:window.location.origin
            }
        })
      
        if(error){  
            setErrorMessage(error.message)
                setLoading(false)
        }
        else{
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
                                        
                                        <div className="relative flex items-center w-full my-5">
                                            <div className="grow h-px bg-[#EDE9FE]"></div>
                                            <span className=" text-[13px] text-[#A78BFA] font-medium bg-white px-3">or</span>
                                            <div className="grow h-px bg-[#EDE9FE]"></div>
                                            </div>
                                            <button className="border py-2.75 px-3.5 text-sm w-full gap-2 text-[#111827] border-[#EDE9FE] rounded-md hover:bg-[#F5F3FF] transition-colors flex items-center justify-center relative">
                                                <img src="data:image/svg+xml,%3csvg%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1888%2014.7814C27.1888%2013.7382%2027.1024%2012.9769%2026.9155%2012.1875H14.7603V16.8959H21.8951C21.7513%2018.066%2020.9745%2019.8282%2019.2483%2021.0123L19.2241%2021.1699L23.0674%2024.0877L23.3336%2024.1137C25.779%2021.9005%2027.1888%2018.644%2027.1888%2014.7814Z'%20fill='%234285F4'/%3e%3cpath%20d='M14.7593%2027.1871C18.2548%2027.1871%2021.1893%2026.0592%2023.3327%2024.1139L19.2474%2021.0124C18.1541%2021.7595%2016.6868%2022.2811%2014.7593%2022.2811C11.3357%2022.2811%208.43002%2020.0679%207.39421%2017.0088L7.24238%2017.0214L3.24611%2020.0524L3.19385%2020.1947C5.32279%2024.3393%209.69579%2027.1871%2014.7593%2027.1871Z'%20fill='%2334A853'/%3e%3cpath%20d='M7.39501%2017.0095C7.1217%2016.2201%206.96353%2015.3742%206.96353%2014.5002C6.96353%2013.6261%207.1217%2012.7803%207.38063%2011.9909L7.37339%2011.8228L3.32703%208.74316L3.19464%208.80488C2.3172%2010.5248%201.81372%2012.4561%201.81372%2014.5002C1.81372%2016.5443%202.3172%2018.4756%203.19464%2020.1954L7.39501%2017.0095Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M14.7594%206.7183C17.1904%206.7183%2018.8302%207.74739%2019.7653%208.60738L23.4191%205.11125C21.1751%203.06716%2018.2549%201.8125%2014.7594%201.8125C9.69583%201.8125%205.3228%204.66012%203.19385%208.80467L7.37985%2011.9907C8.43004%208.93159%2011.3358%206.7183%2014.7594%206.7183Z'%20fill='%23EB4335'/%3e%3c/svg%3e" alt="Google" className="w-5 h-5 " />
                                                <span>Sign in with Google</span>
                                                </button>
                                                <div className="text-center mt-5 text-sm">
                                                    <p className="text-[#6B7280]">Already have an account
                                                         <a href="/signin" className="text-[#9013fe]  no-underline font-medium hover:underline">Log In</a>
                                                         </p>
                                                         </div>

                    </div>
                </div>
            </div>
        </div>

    )
}