import DailyStreak from "../../cards/daily-streak";
import PointBalance from "../../cards/point-balance";
import TopTool from "../../cards/top-tool";
import { supabase } from "../../../lib/supabase-client";
import { useState, useEffect } from "react";

export default function RewardsJourney() {


  const [pointBalance, setPointBalance] = useState<number>(0);
  const fetchPointBalance = async () => {

  const { data: { session } } = await supabase.auth.getSession();
  const userId = session?.user.id;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();


setPointBalance(profile?.points || 0);
  }
  useEffect(() => {
    fetchPointBalance();
  }, []);
 return(

     <div className="ant-tabs-content-holder">
                <div className="ant-tabs-content ant-tabs-content-top">
                  <div
                    role="tabpanel"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="ant-tabs-tabpane ant-tabs-tabpane-hidden"
                    id="rc-tabs-4-panel-1"
                    aria-labelledby="rc-tabs-4-tab-1"
                  >
                    <div>
                      <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-[#9301fe] pl-3 font-semibold">
                        Your Rewards Journey
                      </h2>
                     

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

 
            {/* Points Balance Card */}

            <PointBalance pointBalance={pointBalance} />

            {/* Daily Streak Card */}
            <DailyStreak fetchPointBalance={fetchPointBalance} />

            {/* Top Tool Card  */}
           <TopTool />

           </div>

                        </div>
                        </div>
                        </div>
                        </div>
 )
}