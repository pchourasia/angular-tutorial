import {Component, OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employee.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _empService: EmployeeService){
       
    }

    ngOnInit(){     //better place to call service. ngOnInit calls after constructor
        this.employees = this._empService.getEmployee();
    }

    getEmployees():void{
        this.employees = [
            { id : 101, name: 'tom', gender: 'male', salary: 5000, dob: '1/22/1999'},   //date shoud be in mm/dd/y
            { id : 102, name: 'henry', gender: 'male', salary: 8455.22, dob: '5/8/2000'},
            { id : 103, name: 'david', gender: 'male', salary: 6421.35, dob: '3/21/1982'},
            { id : 104, name: 'mary', gender: 'female', salary: 3500, dob: '11/2/1910'},
            { id : 105, name: 'alexa', gender: 'female', salary: 9500.58, dob: '1/2/1990'}
        ];
    }

    trackByEmpId(index:number, employee:any): number{
        return employee.id;
    }

    getTotalEmpCount():number{
        return this.employees.length;
    }

    getMaleEmpCount():number{
        return this.employees.filter(e=>e.gender=='male').length;
    }

    getFemaleEmpCount():number{
        return this.employees.filter(e=>e.gender=='female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioBtnVal: string): void{
        this.selectedEmployeeCountRadioButton= selectedRadioBtnVal;
    }
}