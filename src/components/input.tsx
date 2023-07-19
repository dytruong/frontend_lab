import React from "react";

interface InputPros {
    label: string;
    placeHolder: string;
}

const Input: React.FC<InputPros> = ({
    label,
    placeHolder
}) => {
    return (
        <div className="mt-4">
            <label className="text-lg font-medium">{label}</label>
            <input 
                className='w-full border-2 border-gray-200 mt-1 p-3 rounded-lg bg-transparent'
                placeholder={placeHolder}
            />
        </div>
    )
}

export default Input