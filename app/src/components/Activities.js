import React from "react";
import CardActivity from "./CardActivity";


function Activities() {    
    const [activities, setActivities] = React.useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:3001/api/products')
        .then((res)=>res.json())
        .then(info =>{
          setActivities(info.data);
        })
    },[])
  
  return (
    <div className="col-lg-6 mb-5" >
      <div className="card shadow mb-3">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
        Actividades
          </h5>
        </div>
        <div className="cardActivity">
          {activities.map((activity,i)=><CardActivity key={i} {...activity} />)}        
          {/* ...activity es equivalente a  name={activity.name} image={activity.image} description={activity.description}*/ }
        </div>
      </div>
    </div>
  );
}

export default Activities

