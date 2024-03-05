import Menu from "./components/Menu/Menu";
import { ResetStyles } from "./styled/ResetStyles";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Seminars from "./pages/Seminars";
import TimeTable from "./pages/TimeTable";
import ContactSupport from "./pages/ContactSupport";

import VideoItem from "./pages/VideoItem";
import VideoPlayer from "./pages/VideoItem";
import WebSocketComponent from "./components/WebSocketComponent";
import ParentComponent from "./components/ParentComponent;";


const App = () => {
    return (
        <>
            <Router>
                <ResetStyles />
                <Menu/>
               {/* <WebSocketComponent/>*/}
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/schedule" element={<ParentComponent />} />
                    <Route path="/seminars" element={<Seminars />} />
                  <Route path="/videos" element={<VideoPlayer />} />
                   <Route path="/contacts" element={<ContactSupport />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>

        </>
    );
};

export default App;
