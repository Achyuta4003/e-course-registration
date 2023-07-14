import React from 'react'
import { Button, Container, Table, } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const RegistrationDetailsPage = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const registrations = useSelector(state => state.registrations.value)

    const userDetalis = registrations.filter(item => item.id === Number(id))[0]

    const { fName, lName, profession, gender, maritalStatus, course, courseType, street, landmark, zip, city, country, code, email, phone, dob } = userDetalis;

    return (
        <div className='main-bg cointainer' style={{ minHeight: "100vh" }}>
            <Container>
                <Button className='mt-5 position-absolute text-light d-none d-sm-block' onClick={() => navigate(-1)} variant="link">Back</Button>

                <center className=' pt-5 mt-3  h-100'  >
                    <h1 className='mb-3 text-light text-center'>E-Course details of {fName}</h1>

                    <Table bordered striped className=' w-75 p-3  text-dark  shadow rounded' style={{ background: "#fff" }} >

                        <tbody>
                            <tr className='text-center '>
                                <th colSpan={2} className="bg-dark  text-light">
                                    General Information
                                </th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{`${fName} ${lName}`}</td>
                            </tr>
                            <tr>
                                <th>Profession</th>
                                <td>{`${profession}`}</td>
                            </tr>
                            <tr>
                                <th>Date of Join</th>
                                <td>{`${dob}`}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{`${gender}`}</td>
                            </tr>
                            <tr>
                                <th>Marital Status</th>
                                <td>{`${maritalStatus}`}</td>
                            </tr>
                            <tr className='text-center'>
                                <th colSpan={2} className="bg-dark  text-light">
                                    Course Details
                                </th>
                            </tr>
                            <tr>
                                <th>Course Name</th>
                                <td>{`${course}`}</td>
                            </tr>
                            <tr>
                                <th>Course Type</th>
                                <td>{`${courseType}`}</td>
                            </tr>
                            <tr className='text-center' >
                                <th colSpan={2} className="bg-dark  text-light">
                                    Contact Information
                                </th>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{`${street}, ${landmark}, ${city}, ${country}, ${zip}`}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{`+${code} ${phone}`}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{`${email}`}</td>
                            </tr>
                        </tbody>

                    </Table>

                </center>
            </Container>
        </div>
    )
}

export default RegistrationDetailsPage
