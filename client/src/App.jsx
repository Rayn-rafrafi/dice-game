import Firs from "./componnents/firstpage";
import Sec from "./componnents/secondpage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Firs  />} />
        <Route path="secondpage" element={<Sec />} />
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
