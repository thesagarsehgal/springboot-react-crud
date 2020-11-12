import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        };

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount() {
        // console.log("test1-component mount");
        EmployeeService.getEmployees().then((res) => {
            console.log("test2-got all employees");
            console.log(res.data);
            this.setState({ employees: res.data });
        });
    }

    addEmployee = ()=>{
        // console.log("test3-add employee");
        this.props.history.push("/add-employee/-1");
    }

    editEmployee = (eid) => {
        // console.log("test4-edit employee eid=>"+eid);
        this.props.history.push("/add-employee/" + eid)
    }

    deleteEmployee = (eid) => {
        // console.log("test5-delete employee with eid=>"+eid);
        EmployeeService.deleteEmployee(eid).then((res) => {
            this.setState({
                employees: this.state.employees.filter(employee => employee.id !== eid)
            });
        });
    }

    viewEmployee = (eid) => {
        this.props.history.push("/view-employee/"+eid);
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>
                        Add New Employee
                    </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Emloyee First Name</th>
                                <th>Emloyee Last Name</th>
                                <th>Emloyee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">
                                                View
                                            </button>
                                            &nbsp;
                                            <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">
                                                Update
                                            </button>
                                            &nbsp;
                                            <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeesComponent;