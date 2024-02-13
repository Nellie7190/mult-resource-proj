import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Accordion from './Components/Accordion/Accordion';
import Directory from './Pages/Directory';
import ColorGenerator from './Components/ColorGenerator/ColorGenerator';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Directory />}></Route>
        < Route path= "/accordion" element={< Accordion />} />
        < Route path= "/color-generator" element={< ColorGenerator />} />
      </Routes>
    </>
  );
}

export default App;
