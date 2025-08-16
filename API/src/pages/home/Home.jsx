import { useLocation } from "react-router-dom";
import { Main8 } from "../../components/Header";

const Home = () => {

    const {state} = useLocation();

    return (
        <div>
            <h1>Home Page</h1>
            <p>Name: {state?.name}</p>
            <p>Age: {state?.age}</p>
            <p>Address: {state?.address}</p>
            <p>Gender: {state?.gender}</p>
        </div>
    );
}

export default Home;