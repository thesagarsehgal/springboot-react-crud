package com.thesagarsehgal.springbootbackend.controller;

import com.thesagarsehgal.springbootbackend.exception.ResourceNotFoundException;
import com.thesagarsehgal.springbootbackend.model.Employee;
import com.thesagarsehgal.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee;
        employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with id="+id+" does not exist."));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee employee;
        employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with id="+id+" does not exist."));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Long> deleteEmployee(@PathVariable Long id){
        employeeRepository.findById(id).orElseThrow(()->{
            return new ResourceNotFoundException("employee with id:"+ id +" not found");
        });
        employeeRepository.deleteById(id);
        return ResponseEntity.ok(id);
    }

}
