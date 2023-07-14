import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const RegistrationData = () => {
    const registrations = useSelector(state => state.registrations.value)
    return (
        <div className=' p-2  main-bg text-light w-100' style={{ height: "90vh" }}>
            <h1 className='mt-5 pt-2  text-center'>E-Course Registration Details</h1>

            <Table striped bordered hover className='w-100 text-center overflow-auto ' responsive>
                <thead className='text-warning border-light bg-dark' >
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Profession</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Course Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=' bg-light'>
                    {
                        registrations.length === 0 ? (
                            <tr>
                                <td colSpan={7}>No data available</td>
                            </tr>
                        ) : (

                            registrations.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{`${item.fName}  ${item.lName}`}</td>
                                    <td>{item.profession}</td>
                                    <td>{item.email}</td>
                                    <td>{item.course}</td>
                                    <td>{item.courseType}</td>
                                    <td><Link to={`/registration-details/${item.id}`}> more</Link></td>
                                </tr>
                            )))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default RegistrationData
