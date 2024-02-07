import { render,screen } from "@testing-library/react"
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe('Contact Us Page Test Cases', () => {
    test('should load contact us component', () => { 
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
     });


     //instead of test,we can also write 'it'
    
    test('should load button inside contact component', () => { 
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        const buttonByText = screen.getByText("Submit");
        expect(buttonByText).toBeInTheDocument();
    });
    
    test('should load input name inside Contact Component', () => { 
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();    
    });
    
    test('should load 2 input boxes inside Contact Component', () => { 
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(3);    
    });
});
