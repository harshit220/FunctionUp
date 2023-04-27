import { useState } from "react";

export default function Lucky(){
const [input, setInput] = useState("");
const [count, setCount] = useState(1);

const num = 5;

const handleMatch = () => {
    setCount(count+1);
    if(input == num){
        alert(
            `congratulations 🎉 you guessed the right number in ${count} attempts`
        );
    }
        else if(input<num){
            alert("you guessed a smaller number");
        }
        else if(input>num){
            alert("you guessed a bigger number");
        }
    setInput("")
}

return (
    <div style={{width:"400px",height:"400px",border:"2px solid black",margin:"30px"}}>
        <h1>Guess the number </h1>
        <input type="Number" value={input} placeholder="Lucky Number..." onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleMatch}>Match Number</button>
    </div>
);
}