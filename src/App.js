import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Start } from './pages/start'
import Calls from './pages/calls';
import { Call } from './pages/call';
import { Header } from './components/Header';


function App() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#fdfdfc", minHeight: "98vh" }}>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Start />} />
                    <Route path="/calls" exact element={<Calls />} />
                    <Route path="/calls/:id" exact element={<Call />} />
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;