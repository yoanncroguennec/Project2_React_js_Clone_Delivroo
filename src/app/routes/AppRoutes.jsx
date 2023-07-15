import { useRoutes } from "react-router-dom";
// PAGES
import { Home } from "../screens";
// Layouts
import { LayoutApp } from "../components/layouts";

export default function Router() {
  let element = useRoutes([
    {
      element: <LayoutApp />,
      children: [
        { path: "/", element: <Home /> },
      ],
    },
  ]);

  return element;
}
