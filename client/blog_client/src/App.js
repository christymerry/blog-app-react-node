
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';

import Post from './post';
import Layout from './layout';
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Indexpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path ='/create' element={<CreatePost/>}/>
      
      </Route>
    </Routes>
    </UserContextProvider>
  
  );
}

export default App;
