import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Product from './customer/components/product/Product.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/footer/footer.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'
import Cart from './customer/components/Cart/Cart.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import AllProduct from './customer/components/product/AllProduct.jsx';
import Contact from './customer/pages/ContactPage/Contact.jsx';
import Login from './customer/components/Account/Login.jsx';
import Register from './customer/components/Account/Register.jsx';
import DashBoard from './Admin/DashBoard.jsx';
import AddProduct from './Admin/AddProduct.jsx';
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import CustomerRouters from './Routers/CustomerRouters.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;