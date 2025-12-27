import { useEffect, useState, useRef } from "react";

export default function  HeaderTab({activeTab, setActiveTab} : {activeTab : number, setActiveTab : (data:number) => void}){
   const tabs = [ "Earn Points", "Redeem Rewards"];
      const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

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
       <div className="flex gap-y-4  gap-x-10 border-b border-gray-200 relative">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => {
                (tabsRef.current[index] = el)
            }}
            onClick={() => setActiveTab(index)}
            className={`relative pb-2 text-md font-thin cursor-pointer h-fit   transition-colors px-3 py-5  ${
              activeTab === index
                ? "text-[rgb(144_19_254)] bg-[rgba(144_19_254_/0.05)] rounded-sm "
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
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