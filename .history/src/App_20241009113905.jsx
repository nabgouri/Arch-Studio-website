import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/portfolio", element: <PortfolioPage /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
