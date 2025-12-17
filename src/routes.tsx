import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoA11y from "./no-a11y";
import LandmarkExamples from "./landmark";



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/a11y" element={<NoA11y />} />
                <Route path="/landmark" element={<LandmarkExamples />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
