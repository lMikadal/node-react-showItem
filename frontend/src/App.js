import './index.css';
import "@material-tailwind/react/tailwind.css";
import Navbar from './componets/Navbar';
import Content from './componets/Content';
import Manage from './componets/Manage';
import ManageItem from "./componets/Manage_items";
import Login from './componets/Navbar_login';
import Register from './componets/Navbar_register';
import Session from './data/Data';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    const [session, setSession] = useState({
        
    });

    useEffect(() => {
        axios.get('http://localhost:5000/apiuser/user/'+ 1)
        .then( response => {  
            response.data == null ? (
                setSession({
                    login: false,
                    user: ""
                })
            ) : (
                setSession({
                    login: true,
                    user: response.data._id
                }) 
            )   
        })
    }, [])

    const check = (data) => {
        setSession({
            login: true,
            user: data
        })
    }

    return (
        <Session.Provider value={session}>
            <Router>
                <Navbar /> 
                <Routes>
                    <Route path="/login" element={<Login check={check} />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/" element={<Content />}></Route>
                    <Route path="/manage" element={<Manage/>}></Route>
                    <Route path="/manage/item" element={<ManageItem/>}></Route>
                </Routes>   
            </Router>
        </Session.Provider>  
    );
}

export default App;
