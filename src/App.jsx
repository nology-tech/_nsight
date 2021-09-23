import './App.scss';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './pages/courses/courses';
import Dashboard from './pages/dashboard/dashboard.jsx';
import Students from './pages/students/students.jsx';
import Settings from "./pages/settings/settings.jsx";
import Enrollment from "./pages/enrollment/enrollment.jsx";

const  App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
            <Switch>
              <Route path="/courses" exact component={Courses}/>
              <Route path="/students" exact component={Students}/>
              <Route path="/Enrollment" exact component={Enrollment}/>
              <Route path="/Settings" exact component={Settings}/>
              <Route path="/" exact component={Dashboard}/>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
