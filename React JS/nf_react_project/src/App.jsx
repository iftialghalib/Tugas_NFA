import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages"
import Books from "./pages/books"
import Teams from "./pages/Teams"
import ContactUs from "./pages/ContactUs/idex"


function App() {
  return ( 
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />}/>
            <Route path="team" element={<Teams />}/>
            <Route path="contact" element={<ContactUs />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
