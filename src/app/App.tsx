import { MoviesProvider } from "@/entities/movie";
import AppRoutes from "./routing";

const App = () => {
  return (
    <MoviesProvider>
      <AppRoutes />
    </MoviesProvider>
  );
};

export default App;
