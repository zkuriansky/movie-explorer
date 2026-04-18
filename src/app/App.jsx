import { MoviesProvider } from "@/entities/movie";
import AppRoutes from "./routing/Router";

const App = () => {
  return (
    <MoviesProvider>
      <AppRoutes />
    </MoviesProvider>
  );
};

export default App;
