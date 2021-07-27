import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form />, div)
})

test('should render form component', () => {
   render(<Form/>);
   const formElement=screen.getByTestId('task-input');
   expect(formElement).toBeInTheDocument();
   expect(formElement).toHaveTextContent('')
})