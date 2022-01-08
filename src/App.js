import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [content, setContent] = useState('Home');

  return (
    <div className="App" style={{paddingTop: 52}}>
      <Navbar content={content} setContent={setContent}/>
      <Main content={content}/>
      
    </div>
  );
}

export default App;
