const { act } = require("react-dom/test-utils");
import RestaurantMenu from './../components/RestaurantMenu';
import MOCK_DATA from '../mocks/mockResMenu.json'
import "@testing-library/jest-dom";
import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './../utils/appStore';
import Header from './../components/Header';


global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
);

it("should load restaurant menu component",async ()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
    ));

    const accordianHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtn = screen.getAllByRole("button",{name:"ADD +"});
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart : (1 items)")).toBeInTheDocument();
    
    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart : (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(20);
    fireEvent.click(screen.getByRole("button"),{name:"Clear Cart"});
    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    expect(screen.getByText("Cart is empty. Add items to the cart")).toBeInTheDocument();

});