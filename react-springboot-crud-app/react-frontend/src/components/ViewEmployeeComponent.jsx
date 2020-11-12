import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            employee: {},
        }
    }
    
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            this.setState({
                employee: res.data,
            });
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Employee Details</h3>
                            <div className="card-body">
                                <b>First Name: </b> &nbsp; {this.state.employee.firstName}<br/>
                                <b>Last Name: </b> &nbsp; {this.state.employee.lastName}<br/>
                                <b>Email ID: </b> &nbsp; {this.state.employee.emailId}<br/>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;