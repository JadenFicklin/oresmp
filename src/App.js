import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Forums from './pages/Forums';
import Staff from './pages/Staff';
import Rules from './pages/Rules';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav';
import background from './assets/background.jpg';

function App() {
    return (
        <Router>
            <Nav />
            <div className="w-full h-screen fixed left-0 top-0 -z-10">
                {/* bg-[#361b4e] */}
                <div className="absolute left-0 top-0 bg-black h-full opacity-50 w-full"></div>
                <div
                    className="absolute left-0 bottom-0 h-[60%] w-full"
                    style={{
                        background:
                            'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)'
                    }}></div>

                <img
                    src={background}
                    alt="minecraft-village"
                    className="absolute left-0 top-0 w-full h-full object-cover -z-10"
                />
            </div>
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
