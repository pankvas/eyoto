import { render, cleanup, screen } from '@testing-library/react';
import LogoPage from './LogoPage';

//With images, there are two things we can test for. That the image src has been populated correctly,
//and the image alt tag has been populated correctly.

afterEach(cleanup);

describe('The LogoPage component', () => {
    test('alt contains correct value', () => {
        render(<LogoPage />) 
       // screen.debug();
        const testImage = document.querySelector("img") ;
        // console.log(testImage.alt);
        expect(testImage.alt).toContain("Atlas Duo logo");
    })
  
    test('src contains correct value', () => {
        render(<LogoPage/>)
        const testImage = document.querySelector("img") ;
        //console.log(testImage.src);
        expect(testImage.src).toContain("http://localhost/AtlasDuo.png");
    })

    test('src contains correct value using getByRole ', () => {
        render(<LogoPage/>)
        const imgElement = screen.getByRole('img');
        // console.log(`imgElement : ${imgElement}`);
        expect(imgElement.src).toContain("http://localhost/AtlasDuo.png");
    })
});