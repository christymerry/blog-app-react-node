
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';

import Post from './post';
import Layout from './layout';
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Indexpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
      
      </Route>
    </Routes>
  
  );
}

export default App;
