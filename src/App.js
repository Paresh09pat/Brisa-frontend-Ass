import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Issues from './components/Issues';
import Pull from './components/Pull';
import Projects from './components/Projects';
import Wiki from './components/Wiki';
import Security from './components/Security';
import Insights from './components/Insights';
import Settings from './components/Settings';
import CreateIssue from './components/CreateIssue';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Issues />} />
          <Route path='/pull' element={<Pull />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/wiki' element={<Wiki />} />
          <Route path='/security' element={<Security />} />
          <Route path='/insight' element={<Insights />} />
          <Route path='/setting' element={<Settings />} />
          <Route path='/createissue' element={<CreateIssue/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
