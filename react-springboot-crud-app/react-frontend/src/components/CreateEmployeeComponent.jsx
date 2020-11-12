import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: "",
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
        this.getPageTitle = this.getPageTitle.bind(this);

    }

    changeFirstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    changeLastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    changeEmailIdHandler = (event) => {
        this.setState({
            emailId: event.target.value
        });
    }

    saveEmployee = (event) => {
        event.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        if (parseInt(this.state.id) === -1) {
            EmployeeService.addEmployee(employee).then(res => {
                this.props.history.push("/employees");
            });
        } else {
            EmployeeService.updateEmployeeById(employee, this.state.id).then((res) => {
                this.props.history.push("/employees");
            });
        }
    }

    cancel = (event) => {
        this.props.history.push("/employees");
    }


    componentDidMount() {
        console.log(">>>" + this.state);
        if (parseInt(this.state.id) !== -1) {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                });
            });
        }
    }

    getPageTitle = () => {
        if (parseInt(this.state.id) === -1) {
            return "Add New Employee";
        } else {
            return "Update Employee Details";
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">{this.getPageTitle()}</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input type="text" placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                        <br />
                                        <label> Last Name: </label>
                                        <input type="text" placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                        <br />
                                        <label> Email Id: </label>
                                        <input type="text" placeholder="Email ID" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                        <br />
                                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CreateEmployeeComponent;