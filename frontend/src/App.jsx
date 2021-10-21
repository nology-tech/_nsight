import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Courses from "./pages/courses/courses";
import Students from "./pages/students/students.jsx";
import Settings from "./pages/settings/settings.jsx";
import Enrollment from "./pages/enrollment/enrollment.jsx";
import DummyPage from "./pages/dummyPage/dummyPage";
import StudentDetails from "./pages/studentDetails/studentDetails";

const App = () => {
    return (
        <Router>
            <div className="row w-100">
                <div className="col-3 p-0">
                    <Navbar />
                </div>
                <div className="col-9 p-0">
                    <Switch>
                        <Route path="/courses/:courseId">
                            <DummyPage />
                        </Route>
                        <Route path="/courses">
                            <Courses />
                        </Route>
                        <Route path="/students/:studentId">
                            <StudentDetails />
                        </Route>
                        <Route path="/students">
                            <Students />
                        </Route>
                        <Route path="/enrollment">
                            <Enrollment />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
