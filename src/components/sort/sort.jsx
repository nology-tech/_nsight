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
                <p>Sort</p>
            </div>
            {sort && 
                <div>
                    <p onClick={sortAscendingByFirstName}>Sort A-Z</p>
                    <p onClick={sortDescendingByFirstName}>Sort Z-A</p>
                </div>
            }
        </div>
    );
};
export default Sort;