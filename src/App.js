import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ValidateUser } from "./redux/action/auth";
import Loader from "./layout/Loader";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.loaded);

  useEffect(() => {
    dispatch(ValidateUser());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>{user ? <AllRoutes /> : <Loader />}</Router>
    </div>
  );
}

export default App;
