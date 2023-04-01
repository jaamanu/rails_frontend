import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import Nav from './components/Nav';

function App() {
  

  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path='/greeting' element={<Greeting />}/>
    </Routes>
    </div>
  );
}

export default App;
