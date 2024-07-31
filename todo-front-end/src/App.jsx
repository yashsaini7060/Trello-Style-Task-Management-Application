import { Route,Routes } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
