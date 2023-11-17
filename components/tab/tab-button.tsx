import React, {FC, ReactNode} from "react";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const TabButton: FC<TabButtonProps> = ({active, selectTab, children}) => {
    const buttonClasses = active
    ? "text-white border-purple-500 border-b"
    : "text-[#ADB7BE]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;