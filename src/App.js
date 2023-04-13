import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Nav from './components/Nav';
import Tasks from './pages/Tasks'
import Task from './pages/Task';

const App = () => {
  return (
    <Router >
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
