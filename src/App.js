
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  const apiKeyApp = process.env.REACT_APP_NEWS_API_KEY;
  

  return (
    
    <>
   
    
    <BrowserRouter>

      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<News key="home"  apiKey={apiKeyApp} category="general"/>}/>
        <Route exact path="/general" element={<News key="general" apiKey={apiKeyApp}  category="general"/>}/>
        <Route exact path="/business" element={<News key="business" apiKey={apiKeyApp} category="business"/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKeyApp} category="entertainment"/>}/>
        <Route exact path="/health" element={<News key="health" apiKey={apiKeyApp} category="health"/>}/>
        <Route exact path="/science" element={<News key="science" apiKey={apiKeyApp} category="science"/>}/>
        <Route exact path="/sports" element={<News key="sports"apiKey={apiKeyApp}  category="sports"/>}/>
        <Route exact path="/technology" element={<News key="technology" apiKey={apiKeyApp}  category="technology"/>}/>
          
        
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
