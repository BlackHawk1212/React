import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
// import { useNavigate } from 'react-router-dom'

export default class ListEmployeeComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className="row">
                    {/* <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button> */}
                    <Link className="btn btn-secondary" to={"/add-employee"} style={{ width: "150px", marginRight: "5px" }} >Add Employee</Link>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}