import { createBrowserRouter } from 'react-router-dom'

import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import BusesAvailable from './Pages/BusesAvailable/BusesAvailable';


export const routes = createBrowserRouter([
    {
        path : "/",
        element : <UserProfilePage />,
    },
    // {
    //     path : "/Register",
    //     element : <RegisterPage />
    // },
    {
        path : "/BusesAvailable",
        element : <BusesAvailable />
    }
]);