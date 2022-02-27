import './index.css';
import "@material-tailwind/react/tailwind.css";
import Navbar from './componets/Navbar';
import Content from './componets/Content';
import Manage from './componets/Manage';
import ManageItem from "./componets/Manage_items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <Router>
            <Navbar />         
            <Routes>
                <Route path="/" element={<Content />}></Route>
                <Route path="/manage" element={<Manage/>}></Route>
                <Route path="/manage/item" element={<ManageItem/>}></Route>
            </Routes>   
        </Router>
    );
}

export default App;
