import Menu from "./components/Menu/Menu";
import { ResetStyles } from "./styled/ResetStyles";
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Seminars from "./pages/Seminars";
import Video from "./pages/Video";
import ParentComponent from "./components/ParentComponent;";
import Photo from "./pages/Photo";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/AboutMe/Education";
import IndividualLearning from "./pages/AboutMe/IndividualLearning";
import TrainingStudios from "./pages/AboutMe/TrainingStudios";
import SeminarsAndWorkshops from "./pages/AboutMe/SeminarsAndWorkshops";



const App = () => {
    return (
        <>
            <Router>
                <ResetStyles />
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/schedule" element={<ParentComponent />} />
                    <Route path="/seminars" element={<Seminars />} />
                  <Route path="/photo" element={<Photo />} />
                   <Route path="/video" element={<Video />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/individualLearning" element={<IndividualLearning />} />
                    <Route path="/trainingStudios" element={<TrainingStudios />} />
                    <Route path="/seminarsAndWorkshops" element={<SeminarsAndWorkshops />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
