import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container">
      <div className="register">
      <SignUp/>
      </div>
      <div className="icn">
      <div className="icn-up">
        <img src="/target.png" alt="" className="target"/>
        <img src="/report.png" alt="" className="rpt"/>
      </div>
      <div className="icn-down">
        <img src="/google.png" alt="" className="meet"/>
        <img src="/mic.png" alt="" className="mic"/>
      </div>
      </div>
    </div>
  );
}