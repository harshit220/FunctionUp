
import { useState, UseEffect, useRef} from "react";

export default function ChangeImage (){
    const [index, setIndex] = useState();
//useState is a function or react hook inially takes one initial value and returns an array of two values:1. value which holds the state value,2..it is a function which updates the state of the element/value.


let img = ["",
"https://images.pexels.com/photos/137612/pexels-photo-137612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/14762444/pexels-photo-14762444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/3808880/pexels-photo-3808880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/8908129/pexels-photo-8908129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/1086584/pexels-photo-1086584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/13838360/pexels-photo-13838360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

]

const ref=useRef(null)
const MainIndex=useRef(null)
function changeImg(){
    if(MainIndex.current<(img.length-1)){
        MainIndex.current=MainIndex.current+1%img.length
        ref.current.src=img[MainIndex.current];
    }
}
    return(
        <div style={{border:"1px solid black",margin:"20px 100px",padding:"20px "}}>
            <img ref={ref} src={img[MainIndex]} alt="" width="600px" height="600px"/>
            <br/>
            <br/>
            <br/>
            <button onClick={changeImg} style={{border:"2px solid white",color:"white",background:"black",fontSize:"20px",borderRadius:"5px",padding:"5px"}}>Change Image</button>
        </div>
    )
}