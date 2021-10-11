import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Footer from "./components/headers/Footer";
import Header from "./components/headers/Header";
import AdminPage from "./components/mainpages/dashboard/AdminPage";
import Products from "./components/mainpages/products/Products";
import Login from "./components/mainpages/auth/Login";
import Register from "./components/mainpages/auth/Register";
import Cart from "./components/mainpages/cart/Cart";
import NotFound from "./components/mainpages/utils/not_found/NotFound";
import ProductDetail from "./components/mainpages/productDetails/ProductDetail";
import HomePages from "./components/mainpages/homepage/HomePages";
import Categories from "./components/mainpages/category/Categories";
import Contact from "./components/mainpages/Contact-Us/Contact";
import ProductCreate from "./components/mainpages/dashboard/ProductCreate";
import AdminHeader from "./components/mainpages/dashboard/AdminHeader";

function App() {
  const { isAdmin } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token")
  const isAdminLocStor = localStorage.getItem("isAdmin") === 'true'

  // console.log("cond", {isAdmin, token, isAdminLocStor, isAdminLocal: localStorage.getItem("isAdmin")})
  // console.log("cond", (isAdmin || (token && isAdminLocStor)))
  // console.log("cond", Boolean(((isAdmin || (token && isAdminLocStor))) === true))

  return (
    <div className="App">
      <Router>
        {(Boolean(isAdmin || (token && isAdminLocStor)) === true) ? <AdminHeader /> : <Header />}
        <Switch>
          <Route
            path="/admin"
            render={() => (Boolean(isAdmin || (token && isAdminLocStor)) === true) ? <AdminPage /> : <Redirect to="/login" />}
          />
          <Route path="/products" exact component={Products} />

          <Route
            path="/products/:id"
            exact
            render={(props) => <ProductDetail {...props} />}
          />

          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/create categories" exact component={Categories} />
          <Route path="/create Products" exact component={ProductCreate} />

          <Route path="/cart" exact component={Cart} />
          <Route path="/" exact component={HomePages} />
          <Route path="/contact" exact component={Contact} />

          <Route path="*" exact component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
