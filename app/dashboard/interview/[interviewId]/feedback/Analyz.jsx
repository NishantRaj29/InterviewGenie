import React from 'react'

const Analyz = ({overallList=[],conceptList=[]}) => {
  return (
    <div className='l-cont'>
        <div className="l-left">
        <span>Points to Work On</span>
            <ul>
                {overallList.map((items,index)=>(
                    <li key={index}>{items}</li>
                ))}
            </ul>
        </div>
        <div className="l-right">
            <span>Topics To Improve</span>
            <ul>
                {conceptList.map((items,index)=>(
                    <li key={index}>{items}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Analyz