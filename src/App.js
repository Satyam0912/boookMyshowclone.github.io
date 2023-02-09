import { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './Components/AdminDashboard';
import HomePage from './Components/HomePage';
import UserDashboard from './Components/UserDashboard';
import NavbarComponent from './Components/NavbarComponent';

const GlobalData = createContext('');

function App() {

  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignupModel, setShowSignupModel] = useState(false);

  const handleLoginClose = () => {
    setShowLoginModel(false);
  }

  const handleLoginShow = () => {
    setShowLoginModel(true);
  }

  const handleSignupClose = () => {
    setShowSignupModel(false);
  }

  const handleSignupShow = () => {
    setShowSignupModel(true);
  }

  // const [loginOrNot, setLoginOrNot] = useState(false)

  const [adminOrUser, setadminOrUser] = useState(sessionStorage.length ? sessionStorage.getItem("UserOrAdminLogin") === "ADMIN" ? true : false : false)

  const [loginOrNot, setLoginOrNot] = useState(sessionStorage.length ? sessionStorage.getItem("UserOrAdminLogin") === "USER" ? true : false : false)

  const usersInfo = {
    testuser: "Abc123@",
    testuser1: "Abc@123",
  }

  return (
    <GlobalData.Provider value={{
      usersInfo,
      loginOrNot,
      setLoginOrNot,
      adminOrUser,
      setadminOrUser,
      showLoginModel,
      setShowLoginModel,
      showSignupModel,
      setShowSignupModel,
      handleLoginClose,
      handleLoginShow,
      handleSignupClose,
      handleSignupShow
    }}>
      <div className="App">
        <NavbarComponent />
        {loginOrNot ? adminOrUser ? <AdminDashboard /> : <UserDashboard /> : <HomePage />}
      </div>
    </GlobalData.Provider>
  );
}

export default App;
export { GlobalData }
