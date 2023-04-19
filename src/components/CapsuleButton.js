export const CapsuleButton = ({title, children}) => {
    return (
        <div className="flex  rounded-[4px] bg-[#64748B] flex-row items-center justify-between py-1 px-1 mx-2 my-2 hover:cursor-pointer">
            <p className="text-xs md:text-xs text-center font-semibold text-[#F1F5F9] mx-1">
                {title}
            </p>
{children}
        </div>
    )
}
