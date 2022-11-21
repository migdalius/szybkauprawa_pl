import "./sideBar.css";
import {
  Box,
  PlusCircle,
  ListUl,
  ClipboardData,
  DoorOpen,
} from "react-bootstrap-icons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="app__Component-SideBar-main-container">
      <Link className="app__Component-Sidebar-href" to="/">
        <div className="app__Component-SideBar-wrap">
          <div>
            <Box className="bootstrap-icons" />
          </div>
          <div className="app__Component-Sidebar-font-size">Szybkauprawa</div>
        </div>
      </Link>

      <hr className="app__Component-Sidebar-hr" />

      <Link className="app__Component-Sidebar-href" to="/admin/panel-glowny">
        <div className="app__Component-SideBar-wrap mb-10">
          <div>
            <ClipboardData className="bootstrap-icons" />
          </div>
          <div className="app__Component-Sidebar-font-size">Panel</div>
        </div>
      </Link>

      <Link
        to="/admin/lista-instrukcji"
        className="app__Component-Sidebar-href"
      >
        <div className="app__Component-SideBar-wrap mb-10">
          <div>
            <ListUl className="bootstrap-icons" />
          </div>
          <div className="app__Component-Sidebar-font-size">
            Lista Instrukcji
          </div>
        </div>
      </Link>

      <Link
        to="/admin/dodaj-instrukcje"
        className="app__Component-Sidebar-href"
      >
        <div className="app__Component-SideBar-wrap mb-10">
          <div>
            <PlusCircle className="bootstrap-icons" />
          </div>
          <div className="app__Component-Sidebar-font-size">
            Dodaj Instrukcje
          </div>
        </div>
      </Link>

      <div className="app__Component-SideBar-wrap mb-10" onClick={handleLogOut}>
        <div>
          <DoorOpen className="bootstrap-icons" />
        </div>
        <div className="app__Component-Sidebar-font-size">Wyloguj</div>
      </div>
    </div>
  );
};

export default SideBar;
