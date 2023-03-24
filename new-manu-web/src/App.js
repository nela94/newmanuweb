import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js'

function App() {
  return (
    <div className="app-body">
      <NavBar />
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
