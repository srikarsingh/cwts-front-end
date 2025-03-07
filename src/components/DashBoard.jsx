import "../App.css"
import { useNavigate } from "react-router-dom";

 function DashBoard() {
   const navigate = useNavigate();

   return (
     <div className="landing-container">
       <header className="landing-header">
         <h1>Welcome to Our Platform</h1>
         <p>Your gateway to amazing features.</p>
         <div className="button-group">
           <button onClick={() => navigate("/login")} className="btn">
             Login
           </button>
           <button
             onClick={() => navigate("/signup")}
             className="btn btn-secondary"
           >
             Sign Up
           </button>
         </div>
       </header>
     </div>
   );
 }
export default DashBoard;