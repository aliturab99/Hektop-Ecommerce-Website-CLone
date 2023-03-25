import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/commonComponents/header/Header';
import Home from './components/commonComponents/home/Home';
import Login from './pages/Login';

function AppRoutes () {

    const routes = [
        {
          path: '/',
          element: Home,
        },
        {
            path: '/ENGLISH',
            element: Login,
          }
    ];

    return (
            <Routes>
                {
                    routes.map((route, index) => (
                        <Route key={index} exact path={route.path} element={<route.element />} />
                    ))
                }
            </Routes>
    ); 


}

export default AppRoutes;