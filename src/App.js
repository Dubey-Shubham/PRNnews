import './App.css';
import Navbar from './components/Navbar';
import Newspage from './components/Newspage';
import About from './components/About'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Displaynews from './components/Displaynews';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Newspage  category="top"/>}/>
          <Route exact path="/politics" element={<Newspage  category="politics"/>}/>
          <Route exact path="/sports" element={<Newspage  category="sports"/>}/>
          <Route exact path="/health" element={<Newspage  category="health"/>}/>
          <Route exact path="/science" element={<Newspage  category="science"/>}/>
          <Route exact path="/technology" element={<Newspage  category="technology"/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/displaynews/:title" element={<Displaynews/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
