import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Forums from './pages/Forums';
import Staff from './pages/Staff';
import Rules from './pages/Rules';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav';
import background from './assets/background.jpg';
import { UserProvider } from './components/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <Nav />
                <div className="fixed top-0 left-0 w-full h-screen -z-10">
                    {/* bg-[#361b4e] */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <div
                        className="absolute left-0 bottom-0 h-[60%] w-full"
                        style={{
                            background:
                                'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)'
                        }}></div>

                    <img
                        src={background}
                        alt="minecraft-village"
                        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
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
        </UserProvider>
    );
}

export default App;
