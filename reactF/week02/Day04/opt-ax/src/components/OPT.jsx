import { useState } from "react"
import axios from "axios"


export default function OTP(){
const [value, setValue] = useState("")

const axiosPost=()=>{
fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify ({ mobile: Number(value) }),
  })
.then((response) => console.log(response) )
.catch((err) => console.log(err))
}


const handleChange = (e) => {
    if (value.length < 10) {
      setValue(e.target.value);
    } else if (value.length !== 10) {
      alert("Please enter correct number");
    }
  }


const handleClick=()=>{
axiosPost();
}

    return (
        <div>
            <input type="tel" value={value} onChange={handleChange}/>
            <pre/>
            <button onClick={handleClick}>Generate OTP</button>
        </div>
    )
}