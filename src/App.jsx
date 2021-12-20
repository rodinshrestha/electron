import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Explorer from "./pages/Explorer";
import Youtube from "./pages/Youtube";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import FileSystem from "./pages/FileSystem";

const App = () => {
  const { username } = useSelector((state) => state.login);
  const [loader, setLoader] = React.useState(true);
  let navigate = useNavigate();
  React.useEffect(() => {
    if (username) {
      setLoader(false);
    } else {
      navigate("/login");
      setLoader(false);
    }
  }, []);

  if (loader)
    return (
      <div className="explorer-loading">
        <BounceLoader size={25} />
      </div>
    );

  return (
    <Routes>
      <Route path="/" element={<Explorer />} />
      <Route path="login" element={<Login />} />
      <Route path="youtube" element={<Youtube />} />
      <Route path="/file-system" element={<FileSystem />} />

      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default App;
