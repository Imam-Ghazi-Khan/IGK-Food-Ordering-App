const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from 'react-dom/test-utils';
import Body from './../components/Body';
import MOCK_DATA from './../mocks/mockResListData.json';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import UserContext from '../utils/UserContext';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it('should search res list for burger text input', async () => {
    await act(async()=>render(
        <UserContext.Provider value={{loggedInUser:"userName",setUserName:()=>{},isLoggedIn:"",setIsLoggedIn:()=>{}}}>
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        </UserContext.Provider>
    ));

    // const cardsBeforeSearch = screen.getAllByTestId("resCard");
    // expect(cardsBeforeSearch.length).toBe(20);

    // const searchButton = screen.getByRole("button",{name:"Search"});
    // expect(searchButton).toBeInTheDocument();

    // const searchInput = screen.getByTestId("searchInput");

    // fireEvent.change(searchInput,{target:{value:"burger"}});

    // fireEvent.click(searchButton);

    // const cardsAfterSearch = screen.getAllByTestId("resCard");
    // expect(cardsAfterSearch.length).toBe(4);

});


it('should filter top-rated restaurant', async () => {
    await act(async()=>render(
        <UserContext.Provider value={{loggedInUser:"userName",setUserName:()=>{},isLoggedIn:"",setIsLoggedIn:()=>{}}}>
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        </UserContext.Provider>
    ));

    // const cardsBeforeFilter = screen.getAllByTestId("resCard");
    // expect(cardsBeforeFilter.length).toBe(20);

    // const topRatedButton = screen.getByRole("button",{name:"Top Rated Restaurants"});
    // expect(searchButton).toBeInTheDocument();

    // fireEvent.click(topRatedButton);

    // const cardsAfterFilter = screen.getAllByTestId("resCard");
    // expect(cardsAfterSearch.length).toBe(13);

});
