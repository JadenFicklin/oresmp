import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Forums from './pages/Forums';
import Staff from './pages/Staff';
import Rules from './pages/Rules';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/forums" element={<Forums />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
