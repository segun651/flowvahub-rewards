import EarnPoints from "../components/rewards/earn-points/earn-points";
import { RewardsHeader } from "../components/rewards/header";

import { useState } from "react";
import RedeemRewards from "../components/rewards/redeem-rewards/redeem-rewards";

export function Rewards() {

   const [activeHeaderTab, setActiveHeaderTab] = useState(0);
   

   
   
  return (
    <main className="w-full bg-gray-50 px-[1rem] lg:px-[2rem] lg:pt-[2rem] min-h-screen grow md:overflow-y-auto box-border lg:min-h-0">
      <div className="relative bg-gray-50">
       
       <RewardsHeader  activeHeaderTab={activeHeaderTab} setActiveHeaderTab={setActiveHeaderTab}/>

     {activeHeaderTab === 0 ? <EarnPoints /> : <RedeemRewards />}
      
                       
                      </div>
    </main>
  );
}
