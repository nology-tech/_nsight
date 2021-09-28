import React from 'react'
import "./dashboard.scss"
import Button from "../../components/button/button"


const Dashboard = () => {
    return (
            <div className="myClass2">
                <Button text="+ Save" btnStyle="secondary" />
                <Button text="Cancel" btnStyle="primary" />
                <Button text="Third" btnStyle="tertiary" />
                <Button text="Upload" btnStyle="fourth" />
            </div>
    )
}

export default Dashboard
