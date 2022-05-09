import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Home from './components/Home/Home';
import RocketDetails from './components/Rockets/RocketDetails';
import { getLaunches } from './redux/reducers/launchesReducer';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLaunches());
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<RocketDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default App;
