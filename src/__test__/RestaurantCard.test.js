import {render, screen} from "@testing-library/react"
import RestaurantCard from "./../components/RestaurantCard";
import MOCK_DATA from  "./../mocks/resCardMock.json"
import "@testing-library/jest-dom"

describe('Restaurant Card test cases', () => {

    it('should render RestaurantCard component with props Data', () => {
        render(<RestaurantCard resData={MOCK_DATA}/>);

        const name = screen.getByText("Mama Mia! - Italian Ice Creams & Cakes");
    
        expect(name).toBeInTheDocument();
    });
    
});

