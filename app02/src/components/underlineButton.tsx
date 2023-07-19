import React from "react"


interface UnderlineButtonPros {
    buttonValue: string,
    clickAction: any
}

const UnderlineButton: React.FC<UnderlineButtonPros> = ({
    buttonValue,
    clickAction
}) => {
    return (
        <div>
            <button onClick={clickAction} className="font-medium text-base text-violet-500 hover:underline">{buttonValue}</button>
        </div>
    )
}

export default UnderlineButton