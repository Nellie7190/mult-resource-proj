import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Accordion from './Components/Accordion/Accordion';
import Directory from './Pages/Directory';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Directory />}></Route>
        < Route path= "/accordion" element={< Accordion />} />
      </Routes>
    </>
  );
}

export default App;
