import { Routes, Route, Navigate } from 'react-router-dom';
import HomeMainContainer from '../pages/Home/HomeMainContainer';

/**
 * AppRoutes
 * Centralised routing configuration for the portfolio.
 *
 * Current routes:
 *  /        → Home (single-page portfolio)
 *  *        → Redirect to /
 *
 * To add new pages simply import the page component and add a new <Route /> entry.
 */
const AppRoutes = () => {
    return (
        <Routes>
            {/* Home – single-page portfolio */}
            <Route path="/" element={<HomeMainContainer />} />

            {/* Catch-all: redirect unknown paths back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
