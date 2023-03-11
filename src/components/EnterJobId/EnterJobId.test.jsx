import { render, screen, cleanup, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

afterEach(cleanup);

describe('EnterJob Id component', () => {
  
    test('Start appears', () => {
        render( <App />)
       // screen.debug();
        const StartElement = screen.getByText('Start') 
        console.log('StartElement : ' + StartElement.innerHTML);
        expect(screen.getByText('Start')).toBeInTheDocument();
    }); 

    test('Enter Job Id appears', () => {
        render( <App />)
       // screen.debug();
        const EnterJobIdElement = screen.getByLabelText('Enter Job Id') ;
        console.log('EnterJobIdElement : ' + EnterJobIdElement);
        expect(screen.getByLabelText('Enter Job Id')).toBeInTheDocument();
    });
    
    test('Enter A Job input value', async () => {
        render( <App />)
        //screen.debug();

        function hasInputValue(HTMLelement, inputValue) {
            var elementwithMatchingValue = screen.getByDisplayValue(inputValue);
            return elementwithMatchingValue === HTMLelement
        }

        const EnterAJobTextHtmlCollection = document.getElementsByClassName("EnterAJobText");    
        const EnterAJobText = Array.from(EnterAJobTextHtmlCollection)[0].children[1].children[0];

        //console.log('EnterAJobText : ' + EnterAJobText);
    
        fireEvent.change(EnterAJobText, { target: { value: '123' } });
        expect(hasInputValue(EnterAJobText, "123")).toBe(true);      
    }); 

    test('Renders a count of 0', async () => {
        render( <App />)
        //screen.debug();

        function hasInputValue(HTMLelement, inputValue) {
            var elementwithMatchingValue = screen.getByDisplayValue(inputValue);
            return elementwithMatchingValue === HTMLelement
        }

        const EnterAJobTextHtmlCollection = document.getElementsByClassName("EnterAJobText");    
        const EnterAJobText = Array.from(EnterAJobTextHtmlCollection)[0].children[1].children[0];

        //console.log('EnterAJobText : ' + EnterAJobText);   
        
        expect(EnterAJobText).toHaveTextContent('');      
    }); 

   
});