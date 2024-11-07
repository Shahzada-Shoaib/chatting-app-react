import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './utils/privateRoute';



function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute> <Home /> </PrivateRoute>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='#'></Route>

      </Routes>
    </Router>

  );
}

export default App;
