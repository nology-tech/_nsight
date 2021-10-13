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
        <div className="sort">
            <div onClick={toggleSort} className="sort-heading">
                <img src={sortIcon} alt="Sort icon" />
                <p className="sort-heading__word">Sort</p>
            </div>
            {sort && 
                <div className="sort-list">
                    <p onClick={sortAscendingByFirstName} className="sort-list__heading">Ascending to Descending</p>
                    <p onClick={sortDescendingByFirstName} className="sort-list__heading">Descending to Ascending</p>
                </div>
            }
        </div>
    );
};
export default Sort;