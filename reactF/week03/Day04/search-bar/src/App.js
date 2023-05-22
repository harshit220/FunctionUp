import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData]=useState([])
  const [query,setQuery]=useState("")

function findStates(query){
  let url;
  if(query){
   url=`http://cdn-api.co-vin.in/api/v2/admin/location/states?q=${query}`
  }
  else{
    url="http://cdn-api.co-vin.in/api/v2/admin/location/states"
  }
  axios({
  method: 'get',
  url: url,
})
  .then((response) =>{ console.log(response)
   setData(response.data.states)
    })
  }

useEffect(()=>{
findStates();
},[])

  return (
    <div className="App" style={{width:"80%",margin:"auto",padding:"30px"}}>
     <label>Search :
     <input type="text" id="search" placeholder='Search' value={query} onChange={(e)=>setQuery(e.target.value)} style={{margin:"40px 40px 0px 40px",width:"250px",padding:"10px",fontSize:"20px",borderRadius:"10px"}}/>
     </label>
     {query && data?.map((state)=>{
      return <h4 key={state.state_id} style={{border:"1px solid gray",margin:"0px auto",width:"40%"}}>{state.state_name}</h4>
     })}
    </div>
  );
}

export default App;
