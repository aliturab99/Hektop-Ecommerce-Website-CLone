import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/commonComponents/header/Header';
import Home from './components/commonComponents/home/Home';
import ShoppingCart from './components/commonComponents/products/ShoppingCard';
import ProductDetails from './components/products/ProductDetails';
import ProductsList from './components/products/ProductsList';
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
        },
        {
            path: '/products',
            element: ProductsList,
        },
        {
            path: "/details",
            element: ProductDetails,
        },
        {
            path: "/shoppingcart",
            element: ShoppingCart,
        },
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