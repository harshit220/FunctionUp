import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider';

const cardsData = [
  {id: 1, title: 'Pritesh Kumar , IIT Delhi', content: 'CTO @ FunctionUp', imgUrl: 'https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=3840&q=75'},
  {id: 2, title: 'Anubhav Singh , IIT Kanpur', content: 'Co-founder @ Dubdub.ai', imgUrl: 'https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=3840&q=75'},
  {id: 3, title: 'Aviral Sharma , IIT Delhi', content: 'Data Scientist Manager @ Optum', imgUrl: 'https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906235709x512347696206974850%2FMentor-4.jpeg&w=3840&q=75'},
  {id: 4, title: 'Rahul Garg , IIT Kanpur', content: 'Co-founder @ Dubdub.ai', imgUrl: 'https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906303309x809592985984049700%2F1517597437249.jpeg&w=3840&q=75'},
  {id: 5, title: 'Uddhav Bamba , IIT Dhanbad', content: 'Applied Scientist @ Amazon', imgUrl: 'https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=3840&q=75'},
  {id: 6, title: 'Anchal Jaiswal,IIT Kanpur', content: 'Senior Data Scientist @ Tredence', imgUrl: 'https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=3840&q=75'},
  {id: 7, title: 'Aakansha Jain', content: 'SDE @Amazon', imgUrl: 'https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Faakansha.4e4c8f7a1acf2f68a094362e49d9dc64.jpg&w=3840&q=75'},
  {id: 8, title: 'Sourabh Bagrecha', content: 'Software Engineer @Postman', imgUrl: 'https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fsaurabh.ed5108e35e28de3fb2583f997239bb38.jpg&w=3840&q=75'},
  {id: 9, title: 'Divij Bajaj', content: 'Data Scientist @ Microsoft', imgUrl: 'https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fdivij.e38501ee35233aae10ca4da99b3662f9.jpeg&w=3840&q=75'},
  {id: 10, title: 'Mohak Sahu , IIT Bombay', content: 'CTO @ Languify', imgUrl: 'https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fmohak.ce40166641bc8640b263d6cbfdac27af.jpeg&w=3840&q=75'},
]


function App() {
  return (
    <div className="App">
    <div className="container">
        <h1 style={{ 'text-align': 'center' }}>
         Our Mentor's
        </h1>
        <p>Work with a mentor (senior data scientists from top companies) who closely looks at your progress, gives you personalized feedback and helps you fill gaps in your knowledge.</p>
        <Slider cards={ cardsData } />
      </div>
    </div>
  );
}

export default App;
