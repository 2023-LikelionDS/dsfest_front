import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Main from './pages/Main';
import Event from './pages/EventPage';
import Notice from './pages/NoticePage';
import Detail from './components/Notice/NoticeDetail';
import Review from './pages/ReviewPage';
import WriteReview from './pages/WriteReviewPage';

function App() {
    return (
        <BrowserRouter>
            <>
                <Reset />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/write" element={<WriteReview />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;
