import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router'
import { HomePage } from './pages/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { publicRoutes } from './routes/routes';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='*' element={
            <HomePage/>
        }/>
        
        {publicRoutes.map((route,index) => {
          const Page = route.page
          return(
            <Route
              key={index}
              path={route.path}
              element={
                  <Page/>
              }
            />
          )
        })}
      </Routes>
    </>
  );
}

export default App;
