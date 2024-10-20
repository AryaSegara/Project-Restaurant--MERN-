import Banner from "../../components/Banner";
import Categories from "./Categories";
import OurServices from "./OurServices";
import SpecialDishes from "./SpecialDishes";

const Home = () =>{
    return (
        <div>
            <Banner />
            <Categories />
            <SpecialDishes />
            <OurServices />
        </div>
    )
}

export default Home;