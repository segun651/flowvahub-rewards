import RedeemCards from "./redeem-cards";
import RedeemHeader from "./redeem-header";
import { useState } from "react";

export type Reward = {
  id: string;
  title: string;
  description: string;
  points_required: number;
  status: "active" | "coming_soon";
};

export default function RedeemRewards() {
 const [rewards, setRewards] = useState<Reward[]>([]);
 const [activeTab, setActiveTab] = useState<number>(0);

return(
    <>
    <RedeemHeader activeTab={activeTab} setActiveTab={setActiveTab} rewards={rewards}  setRewards={setRewards}/>
    <RedeemCards activeTab={activeTab} rewards={rewards}  setRewards={setRewards}/>
    </>
)
}