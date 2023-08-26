import { mentors } from "./const";
import "./style.css"


const Mentors=()=>{
    return(
        <div className="box">
       {
        mentors.map(mentor=>{
            return(
                <div className="card2">
                    <img src={mentor.image} alt="profile"  height={80} width={80} className="img"/>
                   <div className="info">
                   <p className="name">{mentor.name}</p>
                    <p className="uni">{mentor.university}</p>
                   </div>
                </div>
            )
        })
       }
        </div>
    )
}

export default Mentors;