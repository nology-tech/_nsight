import "./sort.scss";
import sortIcon from "../../assets/icons/sort.svg";

const Sort = (props) => {
    const { sortAscendingByFirstName, sortDescendingByFirstName } = props;

    return (
        <>
            <img src={sortIcon} alt="Sort icon" />
            <button onClick={sortAscendingByFirstName}>Sort A-Z</button>
            <button onClick={sortDescendingByFirstName}>Sort Z-A</button>
        </>
    );
};

export default Sort;
