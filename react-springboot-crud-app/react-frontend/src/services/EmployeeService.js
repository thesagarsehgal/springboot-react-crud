import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";


class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    addEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(eid){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+eid);
    }

    updateEmployeeById(employee, eid){
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + eid, employee);
    }

    deleteEmployee(eid){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+eid);
    }
    
}

export default new EmployeeService(); 