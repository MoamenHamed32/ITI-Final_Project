import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Cart from "./pages/cart/Cart";
import CreateProduct from "./pages/createProduct/CreateProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import MyPc from "./pages/myPc/MyPc";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Profile from "./pages/profile/Profile";
import SearchResults from "./pages/searchResults/SearchResults";
import Shop from "./pages/shop/Shop";
import Signup from "./pages/signup/Signup";
import WishList from "./pages/wishList/WishList";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="flex flex-col min-h-screen gap-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/my-pc" element={<MyPc />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
