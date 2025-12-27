import { useState } from "react";
import { supabase } from "../../lib/supabase-client";
export default function DailyStreak() {

const[loading, setLoading] = useState(false);
const [streak, setStreak] = useState(0);
  async function claimDailyPoints(userId:string) {

  // 1. Fetch user's profile
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();

  if (error) {
    console.error(error);
    return { success: false, message: error.message };
  }

  const now : any = new Date();
  const lastClaim : any = profile.last_daily_claim ? new Date(profile.last_daily_claim) : null;

  // 2. Check if 24 hours have passed
  if (lastClaim && now - lastClaim < 24 * 60 * 60 * 1000) {
    const remaining = 24 * 60 * 60 * 1000 - (now - lastClaim);
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    return { success: false, message: `You can claim again in ${hours}h ${minutes}m` };
  }

  // 3. Update points and streak
  const previousClaim = lastClaim;
  const streak =
    previousClaim && now - previousClaim <= 48 * 60 * 60 * 1000
      ? profile.streak + 1
      : 1;

  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      points: profile.points + 50,
      last_daily_claim: now.toISOString(),
      streak,
    })
    .eq('id', userId);

  if (updateError) {
    console.error(updateError);
    return { success: false, message: 'Error updating profile' };
  }

  return { success: true, message: 'Daily reward claimed! +50 points', streak };
}



  async function claimReward() {
    setLoading(true);
  // Call the claimDailyPoints function with the user's ID
  const { data: { session } } = await supabase.auth.getSession();
  const userId = session?.user.id;
  if (userId) {
    claimDailyPoints(userId).then((result) => {
      if (result.success) {
        setStreak(result.streak || 0);
       
      }
       alert(result.message);
      setLoading(false);
      
    });
  } else {
    alert('User not logged in');
    setLoading(false);
  }
}


  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const date = new Date(); // current date

    return (
          <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl hover:-translate-y-1.25hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
                          <div className="p-4 relative border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
                            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" className="svg-inline--fa fa-calendar  text-[#70D6FF] h-5 w-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"></path></svg>
                              Daily Streak
                            </h3>
                          </div>
                          <div className="p-4">
                            <div className="font-extrabold text-[36px] text-[#9013fe] mb-2">{streak || 0} day</div>
                            <div className="flex mt-4 space-x-2 justify-center">
                              {
                                days.map((day, index) => (



                                  <div key={index} className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500  ${days[date.getDay() - 1] === day ? 'ring-2 ring-[#9013fe] ring-offset-2 ' : ""}`}>
                                    {day.charAt(0)}
                                  </div>

                               

                                ))
                              }
                             
                              </div>
                              <p className="text-[0.875rem] text-gray-600 text-center mt-3">Check in daily to to earn +5 points</p>
                              <button  onClick={claimReward} className="mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-[#9013fe] text-white hover:shadow-[0_4px_12px_rgba(144,_19,_254,_0.2)] hover:translate-y-[-2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-5 w-5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                               {loading ? "Loading..." : "Claim Today's Points"}</button>
                                </div>
                        </div>


    )

    }