import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ExclusiveBrandpage from "../pages/ExclusiveBrandpage";
import StorePage from "../pages/StorePage";
import Deals from "../pages/Deals";
import Travel from "../pages/ShopTravelpage";
import ShopBuddyPage from "../pages/ShopBuddyPage";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ShopLocal from "../pages/ShopLocal";
import ProductDetailsPage from "../pages/ProductDetaisPage";
import CartPage from "../pages/cartpage";
import Checkout from "../pages/Checkout";
import Thankyou from "../pages/thanyou";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/ExclusiveBrandpage" element={<ExclusiveBrandpage />} />
      <Route path="/Stores" element={<StorePage />} />
      <Route path="/Deals" element={<Deals />} />
      <Route path="/ShopTravel" element={<Travel />} />
      <Route path="/ShopBuddy" element={<ShopBuddyPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/ShopLocal" element={<ShopLocal />} />
      <Route path="/Cart" element={<CartPage />} />
      <Route path="/ProductDetailPage/:id" element={<ProductDetailsPage />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
}
