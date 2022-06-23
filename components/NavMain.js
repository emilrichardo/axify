import Link from "next/link";
import { useRouter } from 'next/router'


export default function Test({className,itemClassName,MenuToggleSwitch}) {

const router = useRouter();
const { locale } = router;

const newLink = locale == "en" ? "https://disruptivenews.io/" : "https://disruptivenews.io/es/"


const mainMenuItems = [
    {id:1 ,label:`${locale =='en' ? "About us" : "Sobre nosotros"}` , link : "#" },
    {id:2 ,label:`${locale =='en' ? "Why choose us?" : "¿Por qué elegirnos?"}` , link : "#" },
    {id:3 ,label:`${locale =='en' ? "License" : "Licencias"}`, link : "#",target:"blank" },
    {id:4 ,label:`${locale =='en' ? "Login" : " Ingreso"}`, link : "#", type:"button" },
    {id:4 ,label:`${locale =='en' ? "Register" : "Registro"}`, link : "#", type:"button" },
]


    return(
        <nav  className={`${className} font-title_bold flex flex-col lg:flex-row  "`}>
            {mainMenuItems.map((item)=>(
                <span key={item.id}>
                {item.target == "blank"
                ?
                <a   href={item.link} target="_blank" rel="noreferrer"  onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName} my-4 hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a>
                :
                <Link   href={item.link} ><a onClick={MenuToggleSwitch}  className={`${router.asPath == item.link && " text-primary-light " + " "} ${itemClassName} my-4 hover:text-primary inline-block hover:scale-105 transition-all duration-200`}>{item.label}</a></Link>

                }
                </span>
            ))}
        </nav>
    )
};
