
import "./style.css"
import profile from "./profile.jpg"

const Advisor=()=>{
    return(
        <div className="ad-box">
      
       <h3>Meet Your Mentors</h3>
             <div className="container">
             <div className="card2 card3">
                    <img src={profile} alt="profile" className="img" height={80} width={80}/>
                    <p className="name">Pr. Omkar</p>
                    <p>Principal project scientist</p>
                    <p>IIT Madras</p>
                   
                </div>
                <div className="card2">
                    <img src={profile} alt="profile" className="img" height={80} width={80}/>
                    <p className="name">Akhil Tripathi</p>
                    <button className="btn">message him now</button>
                </div>
                <div className="card2">
                    <img src={profile} alt="profile" className="img" height={80} width={80}/>
                    <p className="name">Vivek Dwivedi</p>
                    <button className="btn">message him now</button>
                </div>
             </div>
                
        </div>
    )
}

export default Advisor;