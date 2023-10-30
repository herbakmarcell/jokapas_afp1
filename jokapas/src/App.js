import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router'
import { HomePage } from './pages/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { publicRoutes } from './routes/routes';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/UserContext';
function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [userId, setUserId] = useState("")
  const value = { userId, setUserId };
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
      setAuthenticated(false)
    }
    else{
      //TODO: Validálni backenden a tokent, és lekérni a userID-t
      setAuthenticated(true)
      setUserId("1")
    }
  }, [])
  return (
    <UserContext.Provider value={value}>
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
    </UserContext.Provider>
  );
}

export default App;
