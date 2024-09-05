"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { useGSAP } from "@gsap/react";
import { desc, eq } from "drizzle-orm";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import InterviewItemCard from "./InterviewItemCard"

const InterviewList = () => {
  const { user } = useUser();
  const [InterviewList, setInterviewList] = useState([]);

  

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);
  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(MockInterview.id));

    console.log(
      "🚀 ~ file: InterviewList.jsx:14 ~ GetInterviewList ~ GetInterviewList:",
      GetInterviewList
    );
    setInterviewList(result)
  };
  
  
  return (
    <div>
      <h2 className="font-medium text-xl text-amber-500 pt-2">Previous Mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3" >
      {InterviewList.length === 0 ? (
        <>
        <p className="font-medium text-xl text-amber-100 font-bold">No Record Found! Please Start Giving Interview..
        <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1fae0/512.gif"
                alt="🫠"
                width="80"
                height="80"
                style={{ display: "inline-block", marginLeft: "8px" }}
              />
        </p>
        </>
        
      ) : (
        InterviewList.map((interview, index) => (
          <InterviewItemCard interview={interview} key={index}/>
        ))
      )}
      </div>
    </div>
  );
};

export default InterviewList;