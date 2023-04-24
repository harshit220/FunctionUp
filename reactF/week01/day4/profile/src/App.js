import logo from './logo.svg';
import './App.css';
import Card from "./components/Card.jsx"

function App() {
  return (
    <div className="App">
     
     <Card image = "https://media.licdn.com/dms/image/D4D03AQHn6tXfvkksow/profile-displayphoto-shrink_400_400/0/1670607724485?e=1687996800&v=beta&t=TL5xIm0cn2wdgo6G4VIA3E-Ang5NwrB5ZXpyYoAmt9Q" designation="Web Developer" name="Harshit Sachan"/>
     <Card image= "https://media.licdn.com/dms/image/D5603AQF7KarL0UJNjQ/profile-displayphoto-shrink_400_400/0/1678598253398?e=1687996800&v=beta&t=1fup7_CqRQChAihVlOXJ-0EKzPnJ2Tm0YGfYqU1Kcpk" designation= "Full Stack Developer" name = "Pranvi Kaypati"/>
     <Card image = "https://media.licdn.com/dms/image/D4D03AQF6OvlIgNXyVA/profile-displayphoto-shrink_400_400/0/1674804311478?e=1687996800&v=beta&t=kaZcWIoE4bLQXaWmL0wOvmIwZy1-P8_C81lY4KTT1sY" designation= "Senior Application Developer" name = "Ritam Sachan"/>

    </div>
  );
}

export default App;
