import { useRouteError } from "react-router-dom";

const Error = () => {
    const err  = useRouteError();
    return (
    <div>
        <h1 style={{margin:'16px'}}>Oops</h1>
        <h2 style={{margin:'16px'}}>Something went wrong</h2>
        <h3 style={{margin:'16px'}}>{err.status}:{err.statusText}</h3>
    </div>
    );
};

export default Error;