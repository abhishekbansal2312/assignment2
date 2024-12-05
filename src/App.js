import "./App.css";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import { JobsProvider } from "./context/JobsProvider";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <JobsProvider>
        <Navbar />
        <Jobs />
      </JobsProvider>
      <Footer />
    </div>
  );
}

export default App;
