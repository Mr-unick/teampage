import { university } from "./const";



const Univercity=()=>{
    return(
        <div className="box">
        {
        university.map(university=>{
            return(
                <div className="card1">
                  
                    <h4>{university.university}</h4>
                   
                </div>
            )
        })
       }
       <div className="head">
       <h4>and so on...</h4>
       </div>
        </div>
    )
}

export default Univercity;