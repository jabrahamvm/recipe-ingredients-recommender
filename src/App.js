// npm add react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, // Any page we want between header and footer
} from "react-router-dom";

// Import react files so that it loads entire page
import Recipes from "./pages/Recipes"

// Components on seperate folder
import Header from "./components/Header"

// Import css file
import "./style.scss"
import RecipeDetails from "./pages/RecipeDetails";

// A Base for all pages on our site
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    // Add Base to all these pages
    children: [
      {
        path: "/:ingredients",
        element: <Recipes/>
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />
      }
    ]
  },
]);

// npm add sass for styling
// Add commonnames for styling
function App() {
  return (
    <div>
      <div className="container justify-content-sm-center">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
