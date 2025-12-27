
  import { useEffect,useState } from "react"
import { supabase } from "../../../lib/supabase-client"
import type { Reward } from "./redeem-rewards";
export default function RedeemCards({rewards,setRewards,activeTab}:{rewards: Reward[], setRewards:(data:Reward[]) => void,activeTab:number}){


 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


      const userPoints = 5
 

  const filteredRewards = rewards.filter((reward) => {
  if (activeTab === 0) return true; // All rewards
  if (activeTab === 1) return  reward.status === 'active' && userPoints >= reward.points_required;
  if (activeTab === 2) return  reward.status === 'active' && userPoints < reward.points_required
  if (activeTab === 3) return  reward.status === 'coming_soon';
  return true;
});

const fetchRewards = async () => {
      setLoading(true);

      const { data , error } = await supabase
        .from("rewards")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setRewards(data ?? []);
      }

      setLoading(false);
    };


  useEffect(() => {
    

    fetchRewards();
  }, []);

  if (loading) return <p>Loading rewards...</p>;
 
  if (error)
    return (
      <div>
        <p className="text-red-500">Failed to load rewards</p>
        <button
          onClick={fetchRewards}
          className="mt-2 px-4 py-2 bg-[#9013fe] text-white rounded"
        >
          Retry
        </button>
      </div>
    );
    return(


        <div className="grid gap-[1.5rem] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] mt-6">
            {
                filteredRewards?.length === 0  ?(
                <div>
                    No Rewards.
                    </div>
                ) 
            :
            filteredRewards.map((reward:Reward) => (
                <div key={reward.id} className="border opacity-[0.7] cursor-not-allowed border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
                    <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">💸</div>
                    <h4 className="text-center text-[1.1rem] font-semibold mb-2">{reward.title}</h4>
                    <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">{reward.description}</p>
                    <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">⭐ {reward.points_required} pts</div>
                    <button disabled className="w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out bg-[#d7e0ed] text-white">Locked</button>
                </div>
            ))}

        </div>
    )
}