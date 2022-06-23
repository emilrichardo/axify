const btnBase= ' max-w-lg inline-flex justify-center items-center relative transition-all text-center  uppercase  rounded cursor-pointer   tracking-wide ';

const sizes ={
    sm: 'text-sm px-2 md:px-2 py-2',
    default:' text-md px-4 md:px-4 py-3 ',
    lg:' px-8 md:px-10 py-4 text-lg ',
    md: ' text-sm !py-2.5 !px-3 '
}

const variants ={
    outline: ' bg-none border border-light hover:bg-light hover:text-dark ',
    default:' ',
    primary:' bg-primary dark:bg-primary hover:bg-primary-light dark:hover:bg-primary-light text-light-100 dark:text-light-100 border border-primary ',
    gray:' dark:bg-dark-gray  dark:hover:bg-opacity-70 text-light-100 dark:text-light-100 ',
    secondary: ' bg-secondary hover:bg-secondary-lightest text-light-white ',
    success: ' bg-success dark:bg-success hover:bg-success-lightest text-light-white '
}

export default function Button({children, size, variant,  iconRight, iconLeft,className, ...props}) {

    

return(
    <button
        {...props}
        className={`
        ${sizes[size] || sizes.default}
        ${variants[variant] || variants.default}
        ${btnBase}
        ${className}
        `}
    >
        {iconLeft && <span className="mr-4 -ml-4" >   {iconLeft}   </span>}
        <span>{children}</span>
        {iconRight && <span className="ml-4 -mr-4" >   {iconRight}   </span>}
    </button>
)

};
