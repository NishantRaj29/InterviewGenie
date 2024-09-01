"use client"
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {ChevronsUpDown} from 'lucide-react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Feedbackcard from './Feedbackcard';
import "./style.css";



const Feedback = ({params}) => {
  const [feedbackList,setFeedbackList] = useState([]);
  const score = feedbackList.reduce((acc, item) => {
    const rating = parseFloat(item.rating);
    return !isNaN(rating) ? acc + rating : acc;
  }, 0);
  const router = useRouter()
  useEffect(()=>{
    GetFeedback();
  },[])
  const GetFeedback=async()=>{
    const result = await db.select()
    .from(UserAnswer)
    .where(eq(UserAnswer.mockIdRef,params.interviewId))
    .orderBy(UserAnswer.id);
    console.log("🚀 ~ file: page.jsx:11 ~ GetFeedback ~ result:", result);
    setFeedbackList(result);
  }

  


  return (
    <div className='p-10'>
      <h2 className='text-8xl font-bold text-[#CBB26A]'>FEEDBACK</h2>
      <h2 className='font-bold text-2xl text-green-600	'>Total Score: {score}/10</h2>
      {feedbackList?.length === 0 ?
      <h2 className='font-bold text-lg text-green-500'>No interview Feedback</h2>
      : <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {feedbackList.map((item,index)=>( 
        <Feedbackcard feedback={item} ind={index} key={index}/>
      ))}
      </div>
      </>
      }
   <Button className='mt-5' onClick={()=>router.replace('/dashboard')}> Go Home</Button>
    </div>
  );
}

export default Feedback;