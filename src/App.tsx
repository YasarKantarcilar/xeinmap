import Admin from "./Components/Admin"
import MainPage from "./Components/MainPage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
