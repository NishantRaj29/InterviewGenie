"use client"
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { LoaderCircle } from "lucide-react";
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
import { chatSession } from '@/utils/GeminiAIModals';
import "./style.css";
import Analyz from './Analyz';



const Feedback = ({params}) => {
  const [feedbackList,setFeedbackList] = useState([]);
  const [load,setLoad]= useState(false);
  const [overallList,setOverallList]=useState([]);
  const [conceptList,setConceptList]=useState([]);
  const [loading, setLoading] = useState(false);

  let updatedAnalyzer = "";
  feedbackList.forEach((items) => {
    updatedAnalyzer += items.feedback;
    updatedAnalyzer+="Next feedback:  ";
  });
  console.log(updatedAnalyzer);

  

  const advancedAnalyzer= async()=>{
    setLoading(true);
    const analyzerPrompt ="The feedback data : "+updatedAnalyzer+" consist of feedback of 5 question , please generate a overall feedback in just 3 points of 10 words only about knowledge in area on must increase  in json format";
    const analyzerPrompt2 ="The feedback data : "+updatedAnalyzer+" consist of feedback of 5 question , please suggest in 3 points 10 words the concepts one must revisit in json format";
    const promptData= await chatSession.sendMessage(analyzerPrompt);
    const promptData2= await chatSession.sendMessage(analyzerPrompt2);
    
    // console.log(promptData.response.text());
    const result1=JSON.parse(promptData.response.text().replace("```json","").replace("```",""));
    const result2=JSON.parse(promptData2.response.text().replace("```json","").replace("```",""));
    const val=result1?.overall_feedback;
    const val2=result2?.concepts_to_revisit;
    setOverallList(val);
    setConceptList(val2);
    setLoad(true);
    setLoading(false);
  }

  const end=()=>{
    setLoad(false);
  }

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
    // console.log("🚀 ~ file: page.jsx:11 ~ GetFeedback ~ result:", result);
    setFeedbackList(result);
  }

  


  return (
    <>
    <div className='p-10'>
      <h2 className='text-3xl font-bold text-[#CBB26A] text-center md:text-8xl'>FEEDBACK</h2>
      <div className="flex justify-between mt-2 mb-4 mr-4">
      <h2 className='font-bold text-2xl text-green-600	'>Total Score: {score}/10</h2>
      <Button disabled={loading} onClick={advancedAnalyzer} className="m-1 p-2 font-bold text-2xl gap-10 text-zinc-300">
          {loading? (
            <>
              <LoaderCircle className="animate-spin" /> Generating from AI
            </>
          ) : (
            'Advanced Analysis'
          )}
        </Button>
      </div>
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
    {load && (<div className="popup-container">
        <div className="popup">
            <Analyz overallList={overallList} conceptList={conceptList}/>
            <div className="icn" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" onClick={end}>
            <linearGradient id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1" x1="7.534" x2="27.557" y1="7.534" y2="27.557" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)" d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"></path><linearGradient id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2" x1="27.373" x2="40.507" y1="27.373" y2="40.507" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a8142e"></stop><stop offset=".179" stop-color="#ba1632"></stop><stop offset=".243" stop-color="#c21734"></stop></linearGradient><path fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)" d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"></path>
            </svg>
        </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Feedback;