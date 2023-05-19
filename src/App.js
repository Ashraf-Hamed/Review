import './App.css';
import Review from './Review'
import {FaBackward} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
    
      
    <main>
    <section className='container'>
  
      <div className='title'>
      <h2>Our Reviews</h2>
      <div className='underline'></div>
      </div>
      <Review/>
      
    </section>
    
    </main>
    </div>
  );
}

export default App;
