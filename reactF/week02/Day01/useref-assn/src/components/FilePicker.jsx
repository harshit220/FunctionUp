import { useRef } from "react"


export default function FilePicker(){
    const ref = useRef(null)
// console.log(ref);

const handlePick = () => {
ref.current.click();
}

    return(
        <div style={{border:"1px solid black",margin:"30px 40% 30px 40%", padding:"30px"}}>
            <label htmlFor="filePiker">
             <h1>Pick One File</h1>
             <hr/>
            <input name="filePiker" type="file" ref={ref}/>
            </label>
            <br/>
            <br/>
            <button onClick={handlePick}>Pick The File</button>
        </div>
    )
}