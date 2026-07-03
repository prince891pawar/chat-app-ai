import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from '../screen/Login.jsx';
import Register from '../screen/Register.jsx';
import Home from '../screen/Home.jsx';

const AppRoutes = () => {
    return (
        <BrowserRouter>
<Routes>
    <Route path="/" element={<Home />  } />
    <Route path="/login" element={<Login /> } />
    <Route path="/register" element={<Register /> } />
</Routes>
</BrowserRouter>
    )
}

export default AppRoutes;