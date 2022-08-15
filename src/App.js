import {BrowserRouter as Router} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import "./styles/tailwind.css";

function App() {
  return (
    <Router>
      <Dashboard />;
    </Router>
    )
}

export default App;
