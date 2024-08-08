import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewItemCard = ({ interview }) => {
    const router = useRouter()
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedbackPress=()=>{
        router.push('dashboard/interview/'+interview.mockId+"/feedback")
    }
  return (
    <div className="shadow-sm rounded-sm " >
      <div 
          style={{
            backgroundImage: 'url("card.jpg")',
            backgroundSize: 'cover',  // Ensures the image covers the whole div
            backgroundPosition: 'center',  // Centers the image
            backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
            width: '100%',
            height: '10rem',
            padding: '1.5rem'
          }}
        >
      <h2 className="font-bold text-violet-300">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-zinc-300">Exp: {interview?.jobExperience}</h2>
      <h2 className="text-xs text-zinc-300">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between gap-5 mt-2">
        <Button size="sm" variant="outline" className="w-full" onClick={onFeedbackPress} >
          Feedback
        </Button>
        <Button className="w-full" size="sm" onClick={onStart}>Start</Button>
      </div>
      </div>
    </div>
  );
};

export default InterviewItemCard;