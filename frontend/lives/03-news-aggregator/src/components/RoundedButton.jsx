export default function RoundedButton({ className, children, tooltip }) {
    const buttonClasses = "-top-2 rounded-full size-7 flex items-center justify-center cursor-pointer"

    return (
        <button className={`${className} ${buttonClasses}`}>
            {children}

            {tooltip &&
                <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity text-xs max-w-24 left-1/2 -translate-x-1/2 bg-neutral-700 text-white rounded p-2 z-10">
                    {tooltip}
                </span>
            }
        </button>
    )
}