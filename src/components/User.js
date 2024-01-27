import { useEffect } from "react";

const User = () => {

    useEffect(()=>{
        //api calls

        const timer = setInterval(()=>{
            console.log("use effect calling")
        },1000);

        return ()=>{
            //for clean-up
            //called when we leave this component
            clearInterval(timer);
        }

    },[]);


    return (
    <div>
        <h2>Name: Imam Ghazi Khan</h2>
        <p>Email: igkhan1710@gmail.com</p>
    </div>
    )
}

export default User;