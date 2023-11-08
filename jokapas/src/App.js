import './App.css';
import {Route, Routes} from 'react-router'
import { HomePage } from './pages/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { protectedRoutes, publicRoutes } from './routes/routes';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/UserContext';
import SnackbarProvider from 'react-simple-snackbar'
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
  }, [userId])
  return (
    <UserContext.Provider value={value}>
      <SnackbarProvider>
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
          {isAuthenticated && protectedRoutes.map((route,index) => {
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
      </SnackbarProvider>
    </UserContext.Provider>
  );
}

export default App;
