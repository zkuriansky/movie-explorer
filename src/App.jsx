import { MoviesProvider } from "./context/MoviesContext";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <MoviesProvider>
      <AppRoutes />
    </MoviesProvider>
  );
};

export default App;
