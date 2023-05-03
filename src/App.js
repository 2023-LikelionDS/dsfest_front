import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Main from './pages/Main';
import Event from './pages/EventPage';
import Notice from './pages/NoticePage';

function App() {
    return (
        <BrowserRouter>
            <>
                <Reset />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/notice" element={<Notice />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;
