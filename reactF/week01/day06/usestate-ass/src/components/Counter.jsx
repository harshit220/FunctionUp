import {useState} from 'react'


export function Counter(){
    const [value, setValue] = useState(0)
    const [inPut, outPut] = useState("")
    const [name, setName] = useState("****")
    
    const handleClickI = ()=>{
        setValue(value+1)
    }
    const handleClickD = ()=>{
       if (value>0){
        setValue(value-1)
        }
    }
    const handleChange = (e)=>{
        outPut(e.target.value)
    }

    const handleClick = () => {
       setName(inPut)
       outPut("")

    }
    return (
        <div style={{textAlign:"center"}}>
        <div style={{width:"200px",height:"200px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto"}}>
            <button onClick = {handleClickI}>+</button>
            <h2>Counter: {value}</h2>
            <button onClick = {handleClickD}>-</button>
        </div>
        <hr/>
        <br />
        <br />

        <div style={{width:"200px",height:"200px",margin:"auto"}}>
            <input type="text" placeholder='Add your name...' value={inPut} onChange={(e) => handleChange(e)} />
            <button onClick = {handleClick}>Submit</button>
            <br />
            <h2>Hi My Name Is : {name}  </h2>
        </div>
        </div>
    )
}