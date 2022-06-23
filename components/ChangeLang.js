import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';


  export default function ChangeLang( ) {
    const { locale, locales, asPath } = useRouter();


    const [showDropdown, setShowDropdown] = useState(false);
    // create a React ref for the dropdown element
    const dropdown = useRef(null);

    useEffect(() => {
      // only add the event listener when the dropdown is opened
      if (!showDropdown) return;
      function handleClick(event) {
        if (dropdown.current && !dropdown.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      window.addEventListener("click", handleClick);
      // clean up
      return () => window.removeEventListener("click", handleClick);
    }, [showDropdown]);

    console.log(showDropdown)





      return(
          <div className="px-7 py-10 ">

            <div className='realtive'>
              <div onClick={() => setShowDropdown(b => !b)} className={` cursor-pointer ${showDropdown ? "  border border-primary-light" : "bg-gray-dark"} peer  inline-flex justify-between   rounded items-center py-2 px-2`}>
                <div className='inline-flex'>
                  <svg className="lg:mr-4"  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8001 0.950012C12.2501 0.950012 12.7001 0.950012 13.1501 0.950012C13.2001 0.950012 13.2501 1.00001 13.3001 1.00001C14.3001 1.05001 15.2501 1.25001 16.1501 1.60001C20.2501 3.15001 22.8001 6.10001 23.6501 10.4C23.7501 10.85 23.7501 11.35 23.8501 11.85C23.8501 12.15 23.8501 12.4 23.8501 12.7C23.8001 13.05 23.8001 13.45 23.7501 13.8C23.5501 15.25 23.1001 16.55 22.4001 17.8C22.3501 17.9 22.3501 18.05 22.3501 18.15C22.7001 19.4 23.0001 20.6 23.3501 21.8C23.5001 22.4 23.7001 23 23.8501 23.6V23.65C23.7501 23.65 23.7001 23.65 23.6001 23.6C21.9501 23.1 20.3001 22.6 18.6501 22.05C18.4501 22 18.3001 22 18.1501 22.1C16.7501 22.9 15.2501 23.45 13.6001 23.6C13.3501 23.6 13.1001 23.65 12.8501 23.7C12.5501 23.7 12.3001 23.7 12.0001 23.7C11.9501 23.7 11.8501 23.65 11.8001 23.65C9.8001 23.55 7.9501 22.9 6.2501 21.8C3.5501 20 1.9001 17.5 1.3001 14.3C1.2001 13.85 1.2001 13.45 1.1001 13C1.1001 12.55 1.1001 12.1 1.1001 11.65C1.1001 11.6 1.1501 11.5 1.1501 11.45C1.3001 9.70001 1.8001 8.00001 2.7001 6.50001C4.5001 3.55001 7.1001 1.75001 10.5001 1.10001C10.9501 1.05001 11.4001 1.00001 11.8001 0.950012ZM21.9001 21.65C21.9001 21.55 21.8501 21.5 21.8501 21.45C21.5501 20.35 21.2501 19.3 20.9501 18.2C20.8501 17.85 20.9001 17.6 21.0501 17.3C21.8001 16 22.3001 14.6 22.4501 13.1C22.6001 11.15 22.2501 9.35001 21.3501 7.65001C19.5501 4.35001 16.7001 2.55001 12.9501 2.30001C10.9501 2.15001 9.1001 2.70001 7.3501 3.70001C3.7001 5.85001 1.7501 10.2 2.6501 14.3C3.4001 17.7 5.3501 20.15 8.5501 21.55C10.6501 22.5 12.8501 22.6 15.0501 22C16.1001 21.7 17.0501 21.25 18.0001 20.65C18.1501 20.55 18.2501 20.55 18.4001 20.6C19.0001 20.8 19.6001 21 20.2001 21.15C20.7501 21.3 21.3001 21.5 21.9001 21.65Z" fill="black"/>
                      <path d="M19.7501 12.3C19.7501 16.35 16.5001 19.6 12.4501 19.6C8.4001 19.6 5.1001 16.3 5.1001 12.3C5.1001 8.25 8.4001 5 12.4501 5C16.4501 5 19.7501 8.3 19.7501 12.3ZM10.5001 11C10.5001 11.9 10.5001 12.75 10.5001 13.65C11.8001 13.65 13.1001 13.65 14.4001 13.65C14.4001 12.75 14.4001 11.9 14.4001 11C13.1001 11 11.8501 11 10.5001 11ZM14.2501 9.65C14.2001 9.45 14.2001 9.3 14.1501 9.1C13.9501 8.3 13.7001 7.5 13.2001 6.8C12.7001 6.15 12.3001 6.15 11.8001 6.8C11.2001 7.65 10.9501 8.6 10.7501 9.6C11.9001 9.65 13.0501 9.65 14.2501 9.65ZM10.7001 14.95C10.7501 15.15 10.8001 15.35 10.8001 15.5C11.0001 16.3 11.2501 17.05 11.7001 17.7C12.2001 18.4 12.6501 18.4 13.1501 17.7C13.5501 17.1 13.8001 16.45 14.0001 15.8C14.0501 15.5 14.1501 15.25 14.2001 14.95C13.0501 14.95 11.9001 14.95 10.7001 14.95ZM9.1501 10.95C8.3001 10.95 7.4001 10.95 6.5501 10.95C6.3501 11.85 6.3501 12.7 6.5501 13.6C7.4501 13.6 8.3001 13.6 9.1501 13.6C9.1501 12.75 9.1501 11.85 9.1501 10.95ZM15.8001 13.6C16.6501 13.6 17.4501 13.6 18.2501 13.6C18.4501 12.7 18.4501 11.85 18.2501 10.95C17.4001 10.95 16.6001 10.95 15.8001 10.95C15.8001 11.85 15.8001 12.75 15.8001 13.6ZM10.2001 6.75C8.8001 7.3 7.7501 8.25 7.0501 9.6C7.8501 9.6 8.6001 9.6 9.3501 9.6C9.5501 8.65 9.8001 7.7 10.2001 6.75ZM9.3501 15C8.6001 15 7.8501 15 7.0501 15C7.7001 16.4 9.2501 17.6 10.2001 17.85C9.8001 16.95 9.5501 15.95 9.3501 15ZM17.7501 9.65C17.0501 8.35 16.1001 7.4 14.7001 6.8C15.1501 7.75 15.4001 8.7 15.6001 9.65C16.3001 9.65 17.0501 9.65 17.7501 9.65ZM17.7501 14.95C17.0001 14.95 16.3001 14.95 15.6501 14.95C15.3501 15.9 15.1001 16.85 14.8001 17.75C16.1001 17.2 17.1001 16.25 17.7501 14.95Z" fill="black"/>
                  </svg>
                  <span className="hidden lg:inline-block text-xl" >{locale == "en" ? "En" : "Es"}</span>
                </div>

              </div>
              {showDropdown &&
               <div className="relative">

               <div ref={dropdown} className="bg-primary w-24 absolute top-2   px-2 py-2 rounded" >
                 {locales.map((l, i) => {
                   return (
                     <span className='inline-block' key={i} >
                       <Link href={asPath} locale={l}>
                         <span className={`text-sm text-left  text-white  flex flex-col px-2 py-1 cursor-pointer rounded ${l === locale ? "hidden" : ''}`} >
                           {l == "en" ? "English" : "Spanish"}
                         </span>

                       </Link>
                     </span>
                   );
                 })}
               </div>
               </div>


              }









            </div>







          </div>
      )

};
