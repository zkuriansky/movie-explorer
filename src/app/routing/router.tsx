import type { ReactNode } from "react";
import { Route, Routes } from "react-router";
import MoviePage from "@/pages/MoviePage";
import MainPage from "@/pages/MainPage";
import ErrorPage from "@/pages/ErrorPage";
import FormAddPage from "@/pages/FormAddPage";

type RoutesType = {
  path: string;
  element: ReactNode;
};

const AppRoutes = () => {
  const navigationRoutes: RoutesType[] = [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/movies/:movieId",
      element: <MoviePage />,
    },
    {
      path: "/form",
      element: <FormAddPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]; //route array
  return (
    <Routes>
      {navigationRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes> //create route path
  );
};

export default AppRoutes;
