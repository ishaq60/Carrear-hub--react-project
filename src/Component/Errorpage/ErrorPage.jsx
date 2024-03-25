import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-bold text-5xl">
            <h2 className="text-center">opps!!!</h2>
           <Link to="/">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;