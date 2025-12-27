import { useEffect, useRef, useState } from "react";
import type { Reward } from "../redeem-rewards/redeem-rewards";
export default function RewardTab({rewards,activeTab, setActiveTab}:{rewards: Reward[],  activeTab : number, setActiveTab : (data:number) => void }) {
    const userPoints = 5
  const unlocked = rewards.filter(
  r => r.status === 'active' && userPoints >= r.points_required
)

const locked = rewards.filter(
  r => r.status === 'active' && userPoints < r.points_required
)

const comingSoon = rewards.filter(
  r => r.status === 'coming_soon'
)

  const tabs = [ {label: "All Rewards", length:rewards?.length || 0}, {label:"Unlocked" , length:unlocked?.length || 0}, {label:"Locked", length:locked?.length || 0}, {label:"Coming Soon", length:comingSoon?.length || 0}]
     
          const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

          function handleTabClick(index: number) {
            setActiveTab(index);
           
            }
    
          const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0});
        
              useEffect(() => {
            const currentTab = tabsRef.current[activeTab];
            if (currentTab) {
              setUnderlineStyle({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth,
              });
            }
          }, [activeTab]);
    
    
          return(
            <div className="relative w-full max-w-md mt-7 mb-14 ">
          {/* Tabs */}
          <div className="relative flex gap-8 ">
           <div className="flex gap-y-4  sm:w-fit  gap-x-10 border-b border-gray-200 relative overflow-x-auto sm:overflow-visible
    scroll-smooth
   
    snap-x snap-mandatory">
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                ref={(el) => {
                    (tabsRef.current[index] = el)
                }}
                onClick={() => handleTabClick(index)}
                className={`relative pb-2 text-md font-thin cursor-pointer  w-fit text-nowrap  flex items-center gap-1  transition-colors px-3 py-5  ${
                  activeTab === index
                    ? "text-[rgb(144_19_254)] bg-[rgba(144_19_254_/0.05)] rounded-sm "
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                <p>{tab.label} </p>
                <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#9031fe]/10 text-[#9031fe] font-semibold">{tab.length}</span>
              </button>
              
            ))}
    
            {/* Animated underline */}
            <span
              className="absolute bottom-0 h-0.5 bg-[#9013fe] transition-all duration-300"
              style={{ left: underlineStyle.left, width: underlineStyle.width }}
            />
          </div>
    
          </div>
      </div>
          )
}