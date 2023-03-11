import { render } from '@testing-library/react';
import renderer  from 'react-test-renderer';
import App from './App';


test('App snapshot test', () =>{
  const component = renderer.create(<App />); //variable to hold complete UI
  const tree = component.toJSON(); //passing it to a tree variable which will render as JSON
  expect(tree).toMatchSnapshot(); //then the JSON will be tested against what we have in snapshot
})


test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
