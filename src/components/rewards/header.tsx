import { useState, useRef, useEffect } from "react"
import HeaderTab from "./tabs/header-tab"


export function RewardsHeader({activeHeaderTab, setActiveHeaderTab}  : {activeHeaderTab : number, setActiveHeaderTab : (data:number) => void}) {


return(
<div>
     <div className="sticky  top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0 lg:py-0">

        <div className=" bg-gray-50 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <button className="lg:hidden">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" width="28">
                    <g id="SVGRepo_bgCarrier" stroke-width="0">
                        </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                            </g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
                            </button>
                            <h1 className="text-xl md:text-[1.5rem] font-medium ">Rewards Hub</h1>
                            </div>
                            <div className="mt-2">
                                <div className="notification-container group">
                                    <button className="px-3 py-4 rounded-[50%] bg-[#e5e7eb]" aria-label="Notifications (1 unread)">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell text-[#2D3748] h-4 w-4 group-hover:text-[#9013fe]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path></svg>
                                       </button>
                                       
                                        </div>
                                        </div>
                                       
                                        </div>
                                        </div>



                                        <div>
    <p className="text-gray-600">Earn points, unlock rewards, and celebrate your progress!</p>

<HeaderTab  activeTab={activeHeaderTab} setActiveTab={setActiveHeaderTab}/>

</div>
</div>
)
}