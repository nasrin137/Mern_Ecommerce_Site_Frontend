import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import CategoryPage from "../Pages/Category/CategoryPage";
import Search from "../Pages/Search/Search";
import ShopPage from "../Pages/Shop/ShopPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {path:"/",element:<Home></Home>},
        {path:"/categories/:categoryName",element:<CategoryPage></CategoryPage>},
        {path:"/search",element:<Search></Search>},
        {path:"/shop",element:<ShopPage></ShopPage>}
      ]
     
      
    },
  ]);
export default router;