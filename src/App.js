import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Update from "./pages/Update/Update";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <h1>Supa CRUD</h1>
                <Link to="/">Read</Link>
                <Link to="/create">Create</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/:id" element={<Update />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
