import { SignIn } from "@clerk/nextjs";
import "../../style.css";
// import report from "../../../../public/report.png";
// import mic from "../../../../public";
// import google from "../../../../public";
// import target from "../../../../public";


export default function Page() {
  return (
    <div className="container">
      <div className="register">
      <SignIn/>
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