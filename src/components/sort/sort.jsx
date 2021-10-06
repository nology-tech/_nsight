import "./sort.scss";
import sortIcon from "../../assets/icons/sort.svg";
import { useState } from "react";

const Sort = (props) => {
    const { sortAscendingByFirstName, sortDescendingByFirstName } = props;

    const [sort, setSort] = useState(false);

    const toggleSort = () => {
        setSort(!sort)
    }

    return (
        <div>
            <div onClick={toggleSort} className="sort">
                <img src={sortIcon} alt="Sort icon" />
                <p className="sort__word">Sort</p>
            </div>
            {sort && 
                <div className="sort-dropdown">
                    <p onClick={sortAscendingByFirstName} className="sort-dropdown__heading">Ascending to Descending</p>
                    <p onClick={sortDescendingByFirstName} className="sort-dropdown__heading">Descending to Ascending</p>
                </div>
            }
        </div>
    );
};
export default Sort;