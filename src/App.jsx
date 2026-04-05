import Explorer from "./components/Explorer";
import { MoviesProvider } from "./context/MoviesContext";

const App = () => {
  return (
    <MoviesProvider>
      <Explorer />
    </MoviesProvider>
  );
};

export default App;
