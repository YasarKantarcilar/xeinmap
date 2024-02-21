import MapComponent from "./Map"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapComponent />} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
