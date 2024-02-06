import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav"

function App() {
  return (
    <div>
      hello- i'm the app componnent
     <Nav></Nav>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
