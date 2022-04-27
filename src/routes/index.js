import { Navigate, useRoutes } from "react-router-dom";
import DefaultLayout from "../layouts";
import GamePage from "../pages/GamePage";
import StartPage from "../pages/StartPage";

// components

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { element: <Navigate to="/start" replace />, index: true },
        { path: "start", element: <StartPage /> },
        { path: "game", element: <GamePage /> },
      ],
    },
  ]);
}
