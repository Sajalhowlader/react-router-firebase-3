import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Home' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Product' element={<Products />}></Route>
        <Route path='Login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
