import RewardTab from "../tabs/redeem-tab";
import type { Reward } from "./redeem-rewards";

export  default function RedeemHeader({rewards,activeTab, setActiveTab}:{rewards: Reward[], activeTab : number, setActiveTab : (data:number) => void}) {
 return(
    <div>
        <h2 className="text-lg md:text-2xl my-3 text-black border
         border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] 
         pl-3 font-semibold">Redeem Your Points</h2>

      <RewardTab    rewards={rewards}   activeTab={activeTab} setActiveTab={setActiveTab}  />
                              
    </div>
         
 )
}