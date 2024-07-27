import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2x text-amber-500	">Dashboard</h2>
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