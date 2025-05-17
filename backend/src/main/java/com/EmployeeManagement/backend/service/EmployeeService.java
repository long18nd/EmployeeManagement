package com.EmployeeManagement.backend.service;

import com.EmployeeManagement.backend.entity.Employee;
import com.EmployeeManagement.backend.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    @Transactional
    public Employee updateEmployee(Long id, Employee employee) {
        Employee employeeToUpdate = employeeRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        employeeToUpdate.setName(employee.getName());
        employeeToUpdate.setEmail(employee.getEmail());
        employeeToUpdate.setPhone(employee.getPhone());
        employeeToUpdate.setDepartment(employee.getDepartment());

        return employeeRepository.save(employeeToUpdate);
    }

    @Transactional
    public void deleteEmployee(Long id) {
        Employee employeeToUpdate = employeeRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        employeeRepository.delete(employeeToUpdate);
    }
}
