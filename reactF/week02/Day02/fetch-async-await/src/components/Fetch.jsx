import { useEffect, useState} from "react"

export default function Fetch(){
const [value, setValue] = useState("")
const fetchUpdate = () => {
    fetch('https://dog.ceo/api/breeds/image/random').then((result) => result.json()).then((res)=>setValue(res.message))
}
useEffect(()=>{
    fetchUpdate()
},[])


return(
    <div>
        <h2>Dog Picture's</h2>
        <img src={value} alt="" />
    </div>
)


}