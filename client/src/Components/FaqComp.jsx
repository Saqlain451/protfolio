import React, {useState} from 'react';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

const FaqComp = ({ques, ans}) => {
    const [isAns, setIsAns] = useState(false);
    return (
        <>
            <div className={"bg-secondery b-secondery p-2 mt-2 br-0-5"}>
                <h6 className={"fs-2 text-green d-flex space-between"} onClick={() => {
                    setIsAns(!isAns)
                }}>{ques} <span className={"fs-2 text-green"}> {isAns ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}  </span></h6>
                {isAns ? <p className={"mt-2 fs-1-5 lh-2 text-dark"}>{ans}</p> : ""}
            </div>
        </>
    )
}

export default FaqComp;