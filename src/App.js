
import "./styles-home/navbar.css"
import "./styles-home/general.css"
import "./styles-home/header.css"
import "./styles-home/topCategories.css"
import "./styles-home/root.css"
import "./styles-home/footer.css"
import "./styles-home/popover.css"
import "./styles-single/accordion.css"
import HomePage from './home-components/HomePage';
import "./styles-single/general.css"
import"./styles-home/courses.css"
import "./styles-single/single-header.css"
import SingleCourse from "./single-page-components/SingleCourse"
import MainNavBar from "./home-components/MainNavBar"
import MainFooter from "./home-components/MainFooter"
import "./styles-single/chanel.css";
import "./styles-single/feedback.css";
import "./styles-single/review.css";
import "./styles-single/what.css"
import "./styles-home/media.css"
import "./styles-single/side-bar.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function App() {
    return (
      <><Router>
        <MainNavBar />
        
          <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/:id/:idx" element={<SingleCourse />} />
          </Routes>
        </Router>
        <MainFooter />
      </>
    );
}

export default App;
