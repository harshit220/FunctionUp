

export default function Card({image, designation, name}){
    const handleClick = () => {
        alert(name)
    }
    return (
        <div style={{border:"1px solid black" , width: "50%", margin: "auto", marginTop: "20px", padding : "15px", borderRadius : "10px", background : "teal"}}>
            <img src= {image} alt="" width="150px" style={{borderRadius : "50%"}}/>
            <p> {designation} </p>
            <h2> {name} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> non architecto  laborum, velit iste dicta cumque. <br /> At, quaerat repellendus? Sint, placeat?</p>
            <button onClick = {handleClick} > See More...</button>
        </div>

    )
}
