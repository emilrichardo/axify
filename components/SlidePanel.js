import Button from "./buttons"
export default function SlidePanel({ children ,state, toggleSwitch, className}) {
    return(
        <div>
            {state && <div className={` ${state ? " backdrop-blur-sm xl:backdrop-blur-none": " backdrop-blur-none"} bg-dark bg-opacity-5 transition-all duration-300 delay-700  w-screen h-screen fixed left-0 top-0`} onClick={toggleSwitch}></div>}
            <div className={`${className} ${state ? " right-0 ": " -right-[700px] "} transition-all duration-500  bg-dark bg-opacity-90 px-3 md:px-12 backdrop-blur-sm fixed w-[85%] xl:w-[85%]  max-w-[500px] xl:max-w-[500px] h-screen top-0  text-light z-30 pt-6`}>
                <Button onClick={toggleSwitch} onKeyDown={toggleSwitch} size="sm" className=" !absolute right-8 top-8  py-3">
                    <div className={` ${state ? " rotate-45 w-10 top-2":" rotate-0 w-6"} transition-all relative h-[2px]  bg-light `}></div>
                    <div className={` ${state ? " -rotate-45 w-10":" rotate-0 w-6"} transition-all h-[2px]   bg-light mt-[7px] `}></div>
                </Button >
                { children }
            </div>
        </div>
    )
};
