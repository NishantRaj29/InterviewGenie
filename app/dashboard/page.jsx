"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  const text="Let's Up the Level!"

  const words=useRef([]);

  const tl=gsap.timeline();

  useGSAP(()=>{
    tl.to(words.current,{
      x:-200,
      opacity:0,
      duration:0.3,
     
    }
  )})
  return (
    <div className="p-10">
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          ref={(el) => words.current[index] = el} // Ensure words is properly initialized
          style={{ marginRight: '5px' }}
          className="font-bold text-2xl text-amber-500 "
        >
          {word }
        </span>
      ))}
      <h2 className="text-zinc-300	">Launch Your AI-Powered Mock Interview Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview/>
      </div>
      {/* previous interview questions */}
      <InterviewList/>
    </div>
  );
};

export default Dashboard;