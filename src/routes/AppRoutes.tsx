import { Routes, Route, Navigate } from 'react-router-dom';
import HomeMainContainer from '../pages/Home/HomeMainContainer';

const AppRoutes = () => {
    return (
        <Routes>
           
            <Route path="/" element={<HomeMainContainer />} />

          
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
