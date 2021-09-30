import './App.scss';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './pages/Courses/Courses';
import Dashboard from './pages/dashboard/dashboard.jsx';
import Students from './pages/students/students.jsx';
import Settings from "./pages/settings/settings.jsx";
import Enrollment from "./pages/enrollment/enrollment.jsx";


const  App = () => {
return (
    <Router>
    <div>
        <div className="Navbar">
            <Navbar/>
        </div>
            <Switch>
                <div className="Courses">
                    <Route path="/courses" component={Courses}/>
                </div>
            <Route path="/students" component={Students}/>
            <Route path="/Enrollment" component={Enrollment}/>
            <Route path="/Settings" component={Settings}/>
            <Route path="/" component={Dashboard}/>
            </Switch>
    </div>
    </Router>
);
}

export default App;
