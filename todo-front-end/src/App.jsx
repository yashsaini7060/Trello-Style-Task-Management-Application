import { Route,Routes } from "react-router-dom";

import RequireAuth from "./components/Auth/RequireAuth";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
function App() {
  return ( 
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element= {<RequireAuth/>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
