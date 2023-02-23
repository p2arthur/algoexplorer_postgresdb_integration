import React from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
function ExpandablePanel({ children, header }) {

    const [expanded, setIsExpanded] = useState(false);

    const handleClick = () => {

        setIsExpanded(!expanded)

    }

    return (
        <div className="w-full rounded border mb-3 gap-5">
            <div
                onClick={handleClick}
                className="px-3 py-3 flex justify-between items-center cursor-pointer select-none"
            >
                {header} <div>{expanded ? <GoChevronUp /> : <GoChevronDown />}</div>
            </div>
            {expanded && <div className="p-3 bg-blue-900">{children}</div>}
        </div>)
}

export default ExpandablePanel