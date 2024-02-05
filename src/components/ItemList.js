import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return <div>
        {items.map(item=> 
            <div key={item.card.info.id} className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between"> 
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-2 relative">
                    <div className="absolute bottom-0 left-0 right-0">
                        <button className="py-2 px-8 mx-8 rounded-lg bg-white text-blue-400 font-bold shadow-lg text-xs"
                            onClick={()=>handleAddItem(item)}>
                            ADD +
                        </button>
                    </div>
                    <img src={CDN_URL+ item.card.info.imageId} className="w-full"></img>
                </div>
            </div>
        )}
    </div>
}
export default ItemList;