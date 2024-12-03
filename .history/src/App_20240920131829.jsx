import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/portofolio", element: <Portfolio /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
