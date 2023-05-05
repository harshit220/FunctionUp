
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function DIC(){
const [image, setImage] = useState("")

const getImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((response) => setImage(response.data.message))
    .catch((err) => console.log(err))
}

useEffect (() => {
    getImage();
},[])

return (
    <div>
        <h2>Dog Picture's</h2>
        <img src={image} alt="" />
    </div>
)
}