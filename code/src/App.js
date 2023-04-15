import './App.css';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Cart from './Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<><Header/><Menu/><Main/></>}/>
          <Route path="cart" element={<Cart />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<h1>404 Page Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
