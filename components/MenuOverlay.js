

import Button from "./buttons";
import SocialButtons from "./buttons/SocialButtons";
import ChangeLang from "./ChangeLang";
import NavMain from "./NavMain";
import SlidePanel from "./SlidePanel";
export default function MenuOverlay({menuState,MenuToggleSwitch}) {

    return(

            <SlidePanel   state={menuState} toggleSwitch={MenuToggleSwitch}>
                <div className="h-full flex-col flex justify-between">
                    <NavMain MenuToggleSwitch={MenuToggleSwitch} className="mt-36 " itemClassName="text-xl my-2"/>

                </div>

            </SlidePanel>



    )
};
