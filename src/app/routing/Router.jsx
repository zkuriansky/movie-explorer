import { Route, Routes } from "react-router";
import MoviePage from "@/pages/MoviePage/MoviePage";
import MoviesPage from "@/pages/MainPage";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import FormAddPage from "@/pages/FormAddPage";

const AppRoutes = () => {
  const navigationRoutes = [
    {
      path: "/",
      element: <MoviesPage />,
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
  ]; //массив с путями навигации
  return (
    <Routes>
      {navigationRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes> //создание путей навигации
  );
};

export default AppRoutes;
