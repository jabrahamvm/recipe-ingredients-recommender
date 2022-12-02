// npm add react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet, // Any page we want between header and footer
} from "react-router-dom";

// Import react files so that it loads entire page
import Recipes from "./pages/Recipes"

// Components on seperate folder
import Footer from "./components/Footer"
import Header from "./components/Header"

// Import css file
import "./style.scss"

// A Base for all pages on our site
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        path: "/",
        element: <Recipes/>
      },
    ]
  },
]);

// npm add sass for styling
// Add commonnames for styling
function App() {
  return (
<<<<<<< HEAD
    <div>
      <Top10Recipes ingredients={"apple"}/>
=======
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
>>>>>>> 66d947ece8c29cad22e9c9c7228e7acd8bf5fa06
    </div>
  );
}

export default App;
