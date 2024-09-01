import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const FeedBackPopup = ({userAns, corAns,verdict}) => {
    
    const [num,setNum]=useState(1);

    const first = () =>{
        setNum(1);
    }
    const second = () =>{
        setNum(2);
    }
    const third = () =>{
        setNum(3);
    }
    
    const tl=gsap.timeline();

    useGSAP(()=>{
        tl.from(".bx1",{
            x:-200,
            opacity:0,
            duration:0.5
        })
        tl.from(".bx2",{
            x:-200,
            opacity:0,
            duration:0.5
        })
        tl.from(".bx3",{
            x:-200,
            opacity:0,
            duration:0.5
        })
    })


  return (
    <div className="dibba">
        <div className="l2">
            <div className="bx1" onClick={first}>Your Answer</div>
            <div className="bx2" onClick={second}>Correct Answer</div>
            <div className="bx3" onClick={third}>FeedBack</div>
        </div>
        <div className="exp-main">
            
                {num === 1 && (
                <div className="exp-cont">
                <div className="label">Your Answer</div>
                <div className="exp-content-container">
                    <div className="exp-content">
                    {userAns}
                    </div>
                </div>
                </div>
                )}
                {num === 2 && (
                <div className="exp-cont">
                <div className="label">Correct Answer</div>
                <div className="exp-content-container">
                    <div className="exp-content">
                       {corAns}
                    </div>
                </div>
                </div>
                )}
                {num === 3 && (
                <div className="exp-cont">
                <div className="label">FeedBack</div>
                <div className="exp-content-container">
                    <div className="exp-content">
                      {verdict}
                    </div>
                </div>
                </div>
                )}
        </div>
    </div>
  )
}

export default FeedBackPopup