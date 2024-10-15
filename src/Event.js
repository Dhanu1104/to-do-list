import { useState } from "react"; 
function Save() {
   const [data, setData] = useState( [
      {
      color: "purple",
        type: "minivan",
        registration: new Date('2017-01-03'),
        capacity: 7
      },
      {
        color: "red",
        type: "station wagon",
        registration: new Date('2018-03-03'),
        capacity: 5
      },
      {
        color: "blue",
      type: "minivan",
        registration: new Date('2019-03-03'),
        capacity: 5
      },
      {
        color: "yellow",
        type: "station wagon",
        registration: new Date('2019-03-03'),
        capacity: 9
      }]);
      console.log(data);
    return (
      <div>
      {data.map((value,index)=>{
         return(
        <div key={index}>
          <p>{value.type}</p>
        </div>)
      })} 
      </div>
    )
   {/* return (
      <button onClick={done}>Click To Save</button>
   ); */}
  }
  
  
   export default Save;