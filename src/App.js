import "./App.css";
import UserContainer from "./Container/UserContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./actions/userActions";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <UserContainer />
    </div>
  );
}

export default App;
