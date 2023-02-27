import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <h1>Supa CRUD</h1>
                <Link to="/">Home</Link>
                <Link to="/create">Create New Data</Link>
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
