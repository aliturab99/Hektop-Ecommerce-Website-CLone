import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/commonComponents/header/Header';
import Login from './pages/Login';

function AppRoutes () {

    const routes = [
        {
          path: '/',
          element: Header,
        },
        {
            path: '/ENGLISH',
            element: Login,
          }
    ];

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route, index) => (
                        <Route key={index} exact path={route.path} element={<route.element />} />
                    ))
                }
            </Routes>
        </BrowserRouter>
    ); 


}

export default AppRoutes;