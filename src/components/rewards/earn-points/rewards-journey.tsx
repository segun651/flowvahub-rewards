import DailyStreak from "../../cards/daily-streak";
import PointBalance from "../../cards/point-balance";
import TopTool from "../../cards/top-tool";


export default function RewardsJourney() {

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

            <PointBalance />

            {/* Daily Streak Card */}
            <DailyStreak />

            {/* Top Tool Card  */}
           <TopTool />

           </div>

                        </div>
                        </div>
                        </div>
                        </div>
 )
}