import React, { useState, useEffect } from "react";
import Button from "./buttons";

import MenuOverlay from "./MenuOverlay";
import {useWindowSize} from "./DetectWSize"

import Link from "next/link";
import NavMain from "./NavMain"
import { useRouter } from 'next/router';
import ChangeLang from "./ChangeLang";



export default function Header({className}) {
  const router = useRouter();
  const { locale } = router;



    //menu
    const [menuOverlay, setMenuOverlay] = useState(false)

    const MenuToggleSwitch = () => {
        menuOverlay ? setMenuOverlay(false) : setMenuOverlay(true);
      };

      //panel stake
      const [slidePanel, setSlidePanel] = useState(false);
      const PanelToggleSwitch = () => {
        slidePanel ? setSlidePanel(false) : setSlidePanel(true);
      };


      //scroll

      const [scrolled, setScrolled] = useState(false);
      // change state on scroll
      useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
          }
        };

        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
          // clean up the event handler when the component unmounts
          document.removeEventListener("scroll", handleScroll);
        };
      }, [scrolled]);



        //detect window size width height
    const size = useWindowSize();




    return(
        <header className={`main-header ${className && className} ${scrolled && "bg-dark bg-opacity-80 "} transition-all  px-4 py-2 lg:py-4 fixed top-0 w-screen flex justify-between items-center z-30 `}>
           <Link href="/"><a>Logo</a></Link>


           <div className="ml-auto lg:ml-20 lg:mr-auto"><ChangeLang/></div>


            <div className="flex items-center" >

              {size.width  >   1024
              ?
              <NavMain  className="hidden lg:inline-block uppercase text-sm font-title tracking-wider" itemClassName="mr-8"/>
              :
              <MenuOverlay  menuState={menuOverlay} MenuToggleSwitch={MenuToggleSwitch} />
              }

                <Button onClick={MenuToggleSwitch} onKeyDown={MenuToggleSwitch} size="sm" className="lg:hidden relative   py-3">
                    <div className={`   w-6 transition-all relative h-[2px]  bg-dark `}></div>
                    <div className={`   w-6transition-all h-[2px]   bg-dark mt-[7px] `}></div>
                </Button >


            </div>
        </header>
    )
};
