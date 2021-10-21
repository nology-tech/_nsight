import Button from '../../components/button/button'
import React from 'react'
import FormField from '../../components/formfield/formfield'
import TopHeader from '../../components/topheader/topheader'
import placeholderImage from "../../assets/images/beer.jpg";
import './editStudent.scss'

const EditStudent = () => {
    return (
        <div>
            <TopHeader title="Edit Student" buttonText="Save" />
            <div className="editStudent">
                <div className="editStudent__container">
                    <div className="container p-8">
                        <div className="row justify-content-center">
                        <div className="col-5 borde">
                            <FormField label="First Name" type="text" value="" />
                            <FormField label="Last Name" type="text" value="" />
                            <FormField label="Date of Birth" type="date" />
                            <FormField label="Email Address" type="text" value="" />
                            <FormField label="Mobile Number" type="text" value="" />
                            <FormField label="Employed Post Course" type="select" value="" />
                        </div>
                        <div className="col-5 borde">
                            <label>Student Thumbnail</label>
                            <div className="editStudent__imgContainer">
                                <img className="editStudent__img" src={placeholderImage} alt="student image" />
                            </div>
                            <FormField label="Employer" type="text" value="" />
                            <FormField label="Role" type="text" value="" />
                            <div className="editStudent__buttons">
                                <Button text="Cancel" isBorder />
                                <Button text="Save" btnStyle="primary" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EditStudent
