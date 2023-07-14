import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/registrationReducer';
import "./RegisterPage.css";
import { Country } from "country-state-city";
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const initialState = {
        fName: "",
        lName: "",
        profession: "",
        gender: "",
        maritalStatus: "",
        course: "",
        courseType: "",
        street: "",
        landmark: "",
        zip: "",
        city: "",
        country: "",
        code: "",
        email: "",
        phone: "",
        dob: "",
        acknowledged: ""
    }
    const [formData, setFormData] = useState(initialState);

    const { fName, lName, profession, gender, dob, course, courseType, maritalStatus, country, city, zip, acknowledged, street, landmark, code, email, phone } = formData;

    const dispatch = useDispatch()

    // handler function for input change
    const changeHandler = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };


    // handler function for form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(register(formData))
        handleReset()
        toast.success("Registered successfuly")
    };

    // handler function for form reset
    const handleReset = () => {
        setFormData(initialState)
    }

    return (

        <div className='RegisterPage'>
            <h1 className='mt-5 pt-2 text-light text-center'>E-Course Registration</h1>
            <div className="form-v10">

                <div className="page-content">

                    <div className="form-v10-content">

                        <form className="form-detail" onSubmit={handleSubmit} id="myform">

                            {/* form-left section */}
                            <div className="form-left">
                                <h2>General Infomation</h2>

                                <div className="form-group">
                                    <div className="form-row form-row-1">
                                        <input type="text" name="fName" className="input-text" value={fName} onChange={changeHandler}
                                            placeholder="First Name" required maxLength="15" minLength="2" />
                                    </div>
                                    <div className="form-row form-row-2">
                                        <input type="text" name="lName" value={lName} onChange={changeHandler} className="input-text"
                                            placeholder="Last Name" required maxLength="15" minLength="2" />
                                    </div>
                                </div>



                                <div className="form-row">
                                    <select name="profession" value={profession} required onChange={changeHandler}>
                                        <option value="">Profession</option>
                                        <option value="Student">Student</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Architect">Architect</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Developer">Designer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <span className="select-btn">
                                        <i className="zmdi zmdi-chevron-down"></i>
                                    </span>
                                </div>


                                <div className="form-group">
                                    <div className="form-row form-row-3">

                                        <select name="gender" value={gender} required onChange={changeHandler}>
                                            <option value="">Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <span className="select-btn">
                                            <i className="zmdi zmdi-chevron-down"></i>
                                        </span>


                                    </div>
                                    <div className="form-row form-row-4">
                                        <select name="maritalStatus" value={maritalStatus} onChange={changeHandler} required>
                                            <option value="">Marital Status</option>
                                            <option value="Married">Married</option>
                                            <option value="Unmarried">Unmarried</option>
                                        </select>
                                        <span className="select-btn">
                                            <i className="zmdi zmdi-chevron-down"></i>
                                        </span>

                                    </div>
                                </div>


                                <div className="form-row">
                                    <input type="date" name="dob" placeholder="Date of Join" value={dob} onChange={changeHandler} required max={new Date().toJSON().slice(0, 10)} />
                                </div>


                                <div className="form-group">
                                    <div className="form-row form-row-3">
                                        <select name="course" value={course} required onChange={changeHandler}>
                                            <option value="">Course</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Web Devlopment">Web Devlopment</option>
                                        </select>
                                        <span className="select-btn">
                                            <i className="zmdi zmdi-chevron-down"></i>
                                        </span>
                                    </div>



                                    <div className="form-row form-row-4">
                                        <select name="courseType" value={courseType} required onChange={changeHandler}>
                                            <option value="">Course Type</option>
                                            <option value="One-to-One ">One-to-One </option>
                                            <option value="Boot Camp">Boot Camp</option>
                                            <option value="Webinar">Webinar</option>
                                            <option value="Lesson-Based">Lesson-based</option>
                                            <option value="Group learning">Group learning</option>
                                        </select>
                                        <span className="select-btn">
                                            <i className="zmdi zmdi-chevron-down"></i>
                                        </span>

                                    </div>
                                </div>
                            </div>


                            {/* form-right section */}
                            <div className="form-right">
                                <h2>Contact Details</h2>
                                <div className="form-row">
                                    <input type="text" name="street" className="street" id="street" value={street} onChange={changeHandler} placeholder="Street " required maxLength="40" minLength="2" />
                                </div>
                                <div className="form-row">
                                    <input type="text" name="landmark" value={landmark} onChange={changeHandler} className="additional" id="additional"
                                        placeholder="Land Mark" required maxLength="40" minLength="2" />
                                </div>
                                <div className="form-group">
                                    <div className="form-row form-row-1">
                                        <input type="text" name="zip" className="zip" id="zip" value={zip} maxLength="8" onChange={changeHandler} minLength="2" placeholder="Zip Code" required />
                                    </div>
                                    <div className="form-row form-row-2">
                                        <input type="text" name="city" placeholder="City" required value={city} onChange={changeHandler} maxLength="20" minLength="2" />

                                    </div>
                                </div>
                                <div className="form-row">
                                    <select name="country" value={country} onChange={changeHandler}>
                                        <option value="">Country</option>

                                        {Country &&
                                            Country.getAllCountries().map((item) => (
                                                <option key={item.isoCode} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                    </select>
                                    <span className="select-btn">
                                        <i className="zmdi zmdi-chevron-down"></i>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div className="form-row form-row-1">
                                        <input type="text" name="code" className="code" value={code} pattern="[0-9]{2,5}" maxLength="5" onChange={changeHandler} id="code" placeholder="Code +" />
                                    </div >
                                    <div className="form-row form-row-2">
                                        <input type="tel" name="phone" className="phone" value={phone} onChange={changeHandler} id="phone" placeholder="Phone Number" pattern="[0-9]{10}"
                                            required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input type="email" name="email" value={email} onChange={changeHandler} id="your_email" className="input-text" required
                                        pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Your Email" />
                                </div>
                                <div className="form-checkbox">
                                    <label className="container">
                                        <p>I do accept the <a href="/" className="text">Terms and Conditions</a> of your site.</p>
                                        <input type="checkbox" name="acknowledged" value="yes"
                                            checked={acknowledged ? true : false}
                                            onChange={changeHandler} required />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="form-row-last">
                                    <input type="submit" className="register mx-4" value="Register" />
                                    <input type="reset" onClick={handleReset} className="register" value="Reset" />
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default RegisterPage
