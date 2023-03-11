import { BrowserRouter, Routes, Route} from "react-router-dom";

import LogoPage from './pages/LogoPage';
import LandingPage from './pages/LandingPage';
import InProgressPage from './pages/InProgressPage';
import JobCompletePage from './pages/JobCompletePage';
import ResultsPage from './pages/ResultsPage';

// Comment out if you need to run the TestHarness code, or/and see MUI elements
// import TestHarness from './TestHarness';
// import MUIComponentsPage from './pages/MUIComponentsPage'

import './App.css';

function App() {

    return (
        <div className="App">

            {/* Comment out if you need to run the TestHarness code, or/and see MUI elements */}
            {/* Remember to include the imports above if you include the beelow */}
            {/* <MUIComponentsPage /> */}
            {/* <TestHarness/>  */}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogoPage />}>  
                        <Route index element={<LandingPage />} />
                        <Route path="InProgressPage" element={<InProgressPage />} />
                        <Route path="JobCompletePage" element={<JobCompletePage />} />
                        <Route path="ResultsPage" element={<ResultsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
