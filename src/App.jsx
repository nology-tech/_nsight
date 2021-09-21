import logo from './logo.svg';
import './App.scss';
import Example from './pages/example/example.jsx';
import Students from  "./pages/students/students";

function App() {
  return (
    <div className="App">
        <Example></Example>
        <Students />
    </div>
  );
}

export default App;
