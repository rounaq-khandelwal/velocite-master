import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { UserProvider } from './service/UserContext';
import Registration from "./component/User/Registration";
import ResetPassword from "./component/User/ResetPassword";
import  Login from './component/User/Login';
import MainRoutes from './routes';

import RecorderPage from "./component/Recorder/Recorderpage";

const App = () => {
  const pathname = window.location.pathname;
  const [user, setUser] = React.useState({});



	
  return (
	    <BrowserRouter>
			<UserProvider>
				<MainRoutes/>
			</UserProvider>
		</BrowserRouter>
  );
}

export default App;
