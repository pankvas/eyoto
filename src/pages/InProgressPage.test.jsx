 import { render, screen } from '@testing-library/react';
 import InProgressPage from './InProgressPage';

// //import mockFetch from "./mocks/mockFetch";
// import FetchWrapper from '../services/FetchWrapper'; 

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve(),
//     })

// );



test.skip('InProgress Page renders correctly', () => {
    render(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LogoPage />}>  
                
                <Route path="InProgressPage" element={<InProgressPage />} />
                
            </Route>
        </Routes>
    </BrowserRouter>

 )
    const  textElement = screen.getByText('Measuring Job ID:')
    expect(textElement).toBeInTheDocument()

})