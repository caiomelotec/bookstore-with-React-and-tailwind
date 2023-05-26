import "./App.css";
import { NavBar } from "./components/NavBar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <main className="App bg-gray-100 dark:bg-gray-800">
      <NavBar />
      <AllRoutes />
    </main>
  );
}

export default App;
