
import './App.css';
import Invitation from './components/Invitation';
function App() {
  return (
    <div className="App">
     <Invitation subject="Birthday party invitation" to="harshit@gmaill.com" name="Harshit" party="birthday party" friends="Pranavi, Adarsh, Shailja" location="Spectrum"from="Harshit"/>
    </div>
  );
}

export default App;
//const {subject,to,name,party,friends,location,from}=props