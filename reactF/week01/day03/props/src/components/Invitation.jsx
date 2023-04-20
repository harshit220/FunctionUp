
function Invitation(props){
    const {subject,to,name,party,friends,location,from}=props
    return(
        <div className="main">
            <p>Subject  : <span>{subject}</span></p>
            <p>To       : <span>{to}</span></p>
            <p>Hi, <span>{name}</span></p>
            <p>I am having a <span>{party}</span> next friday at my home. Would you like to come? It will be  fun. Lots of people from my school are coming. <br /> You know some of them - <span>{friends}</span></p>
            <p>My house is behind our school, near <span>{location}</span>.</p>
            <p>I hope you will come and see you soon</p>
            <p>from, <strong>{from}</strong></p>
        </div>
    )
}

export default Invitation;