import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mirror1 from "./Components/Mirror1";
import Mirror2 from "./Components/Mirror2";
import Download from "./Pages/Download";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/bruh"} element={<Home />} />
        <Route path={"/nerinyan"} element={<Mirror1 />} />
        <Route path={"/ppy"} element={<Mirror2 />} />
        <Route path={"/"} element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
