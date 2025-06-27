import React from "react";
function Add_card(props){

    return(
    <div className="max-w-sm rounded bg-[black] overflow-auto break-words shadow-lg w-[200px] min-h-[220px]">
           
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-gray-700 text-base max-h-40">
                   {props.detail}
                </p>
            </div>
</div>
    )
}

export default Add_card