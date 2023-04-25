import Navbar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import {useDispatch} from "react-redux";
import { getAllGenres } from "../../Redux/actions";
import { useEffect } from "react";
import { } from "./Home.css";


const Home = () => {
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch]);

return (
    <div className="div-home">
      <Navbar />
      <Cards />
    </div>
  );
};

export default Home;