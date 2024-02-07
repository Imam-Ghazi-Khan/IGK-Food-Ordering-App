import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from 'react-redux';
import Header from './../components/Header';
import appStore from './../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

describe('Header component test cases', () => {
    it('should render header component with a login button', () => {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
    
        const loginButton = screen.getAllByRole("button");
        expect(loginButton.length).toBe(2);
    
        // const loginButton = screen.getByRole("button",{name:"Login"});
        // expect(loginButton).toBeInTheDocument();
    });
    
    it('should render header component with 0 Cart Items', () => {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
    
        const cartItems = screen.getByText("Cart : (0 items)");  //we can also pass regex
        expect(cartItems).toBeInTheDocument();
    });
    
    
    it('should render header component with a cart item', () => {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
    
        const cartItems = screen.getByText(/Cart/);  //we can also pass regex
        expect(cartItems).toBeInTheDocument();
    });
    
    it('should change login button to logout', () => {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
    
        const loginButton = screen.getAllByRole("button");
        fireEvent.click(loginButton[0]);
        const logoutButton = screen.getAllByText("Logout");
        expect(logoutButton[0]).toBeInTheDocument();
    
        // const loginButton = screen.getByRole("button",{name:"Login"});
        // expect(loginButton).toBeInTheDocument();
    });
    
    
});
