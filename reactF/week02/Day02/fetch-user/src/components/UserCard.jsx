

export default function UserCard({user}){
console.log(user);
const {email,avatar,id,first_name,last_name}=user;
    return(
        <div style={{border:"1px solid black",margin:"auto",width:"50%",marginTop:"20px",padding:"10px"}}>
            <img src={avatar} alt="" />
            <h2>{id}</h2>
            <h3>{first_name} {last_name}</h3>
            <p>{email}</p>
        </div>
    )
}