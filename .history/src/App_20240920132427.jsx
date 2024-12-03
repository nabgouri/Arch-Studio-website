import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/portfolio", element: <PortfolioPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
