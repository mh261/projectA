import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import AllProduct from '../customer/components/product/AllProduct'
import Product from '../customer/components/product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Cart from '../customer/components/Cart/Cart'
import Checkout from '../customer/components/Checkout/Checkout'
import Contact from '../customer/pages/ContactPage/Contact'
import Register from '../customer/components/Account/Register'
import Login from '../customer/components/Account/Login'
import DashBoard from '../Admin/DashBoard'
import AddProduct from '../Admin/AddProduct'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Navigation from '../customer/components/Navigation/Navigation.jsx'
import Footer from '../customer/components/footer/footer.jsx'

const CustomerRouters = () => (
    <div>
        <div>
            <Navigation />
        </div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
            <Route path="/san-pham" element={<AllProduct />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/checkout" element={<Checkout />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<DashBoard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderD" element={<OrderDetails />} /> */}
        </Routes>
        <div>
            <Footer />
        </div>
    </div>
)

export default CustomerRouters