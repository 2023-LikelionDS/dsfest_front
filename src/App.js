import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Reset } from 'styled-reset';
function App() {
    return (
        <BrowserRouter>
            <Reset />
            <Routes>
                <Route exact path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
