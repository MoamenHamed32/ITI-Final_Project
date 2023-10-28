import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ProductDetails from "./pages/productDetails/ProductDetails";
import SearchResults from "./pages/searchResults/SearchResults";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import WishList from "./pages/wishList/WishList";
import CreateProduct from "./pages/createProduct/CreateProduct";
import MyPc from "./pages/myPc/MyPc";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
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
    </Router>
  );
}

export default App;
