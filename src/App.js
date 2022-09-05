import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { get, child, ref, getDatabase } from "firebase/database";
import ProfileCard from "./components/cards/ProfileCard";
import MainSearchBar from "./components/Searchbars/MainSearchBar";
import Navbar from "./components/Sidebars/Navbar";
import AuthContextProvider, { useAuth } from "./contexts/AuthContext";
import sidebarList from "./data/sidebarList";
import LicenseListLayout from "./Layout/LicenseListLayout";
import MainLayout from "./Layout/MainLayout";
import UsersLayout from "./Layout/UsersLayout";
import WaitingLayout from "./Layout/WaitingLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./styles/tailwind.css";
import { VscSignOut } from "react-icons/vsc";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Users from "./pages/Users";
import WaitingList from "./pages/WaitingList";

const db = getDatabase();
function App() {
  const { currentUser } = useAuth();
  const [data, setData] = useState();
  const getData = ref(db);
  useEffect(() => {
    const fetchData = () => {
      get(child(getData, "users/")).then((snapshot) => {
        const fetched = snapshot.val();
        console.log(fetched);
        console.log("All Data");
        setData(fetched);
      });
    };
    fetchData();
  }, []);
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/license" element={<LicenseListLayout />} />
          <Route path="/waiting" element={<WaitingList />} />
        </Routes>
        <>

        </>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
