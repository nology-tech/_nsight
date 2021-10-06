import "./searchbox.scss";
import search from "../../assets/icons/search.svg";

const Searchbox = (props) => {
    
    const { handleSearch } = props;

    return (
        <div className="searchbar">
            <input className="searchbar__input" type="text" onChange={handleSearch} />
            <img src={search} alt="Search icon" className="searchbar__icon" />
        </div>
    );
};

export default Searchbox;
