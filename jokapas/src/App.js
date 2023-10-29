import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router'
import { HomePage } from './pages/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
function App() {
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Navbar/>
          <HomePage/>
        </>}/>
    </Routes>
  );
}

export default App;
