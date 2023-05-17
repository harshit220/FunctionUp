import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './Components/Test';


function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" component={Test} />
    </Router>
    </div>
  );
}

export default App;
