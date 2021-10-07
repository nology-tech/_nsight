import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Courses from "./pages/courses/courses";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Students from "./pages/students/students.jsx";
import Settings from "./pages/settings/settings.jsx";
import Enrollment from "./pages/enrollment/enrollment.jsx";
import DummyPage from "./pages/dummyPage/dummyPage";
import StudentDummyPage from "./pages/studentDummyPage/studentDummyPage";

const App = () => {
    return (
        <Router>
            <div className="row w-100">
                <div className="col-3 p-0">
                    <Navbar />
                </div>
                <div className="col-9 p-0">
                    <Switch>
                        <Route path="/courses">
                            <Courses />
                        </Route>
                        <Route path="/courses/:courseId">
                            <DummyPage />
                        </Route>
                        <Route path="/students">
                            <Students />
                        </Route>
                        <Route path="/students/:studentId">
                            <StudentDummyPage />
                        </Route>
                        <Route path="/enrollment">
                            <Enrollment />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
