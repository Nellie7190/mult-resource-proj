import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Accordion from './Components/Accordion/Accordion';
import Directory from './Pages/Directory';
import ColorGenerator from './Components/ColorGenerator/ColorGenerator';
import StarRating from './Components/StarRating';

function App() {
  // FIX BACKGROUND COLOR TO BE BACK WHITE WHEN LEAVING RANDOM COLOR PAGE
  return (
    <>
      <Routes>
        <Route path='/' element={<Directory />}></Route>
        < Route path= "/accordion" element={< Accordion />} />
        < Route path= "/color-generator" element={< ColorGenerator />} />
        < Route path= "/star-rating" element={< StarRating />} />
      </Routes>
    </>
  );
}

export default App;
