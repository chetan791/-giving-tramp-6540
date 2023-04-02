import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ExclusiveBrandpage from "./pages/ExclusiveBrandpage";
import Deals from "./pages/Deals";
import Travel from "./pages/ShopTravelpage";
import ShopBuddyPage from "./pages/ShopBuddyPage";
import StorePage from "./pages/StorePage";
import ProductDetailsPage from "./pages/ProductDetaisPage";
import RegisterPage from "./pages/register";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import LoginPage from "./pages/login";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/Allroutes";

/* Replace FONT_NAME with the name of the font you selected */

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <AllRoutes />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
