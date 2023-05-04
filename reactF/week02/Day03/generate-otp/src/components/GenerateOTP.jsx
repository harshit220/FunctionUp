import { useState } from "react";

export default function GenerateOTP(options) {
  const [number, setNumber] = useState("");

  const postRequest = () => {
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify ({ mobile: Number(number) }),
    })
      .then((res) => {
        // Handle response
        console.log(res);
      })
      .then((data) => console.log(data))
      .catch((err) => {
        // Handle errors
        console.log(err);
      });
  };

  const handleChange = (e) => {
    if (number.length < 10) {
      setNumber(e.target.value);
    } else if (number.length !== 10) {
      alert("Please enter correct number");
    }
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <pre />
      <button onClick={postRequest}>Get OTP</button>
    </div>
  );
}
