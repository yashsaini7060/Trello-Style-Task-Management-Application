import { Route,Routes } from "react-router-dom";

import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
function App() {
  return ( 
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
