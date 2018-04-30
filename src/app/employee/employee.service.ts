import { Injectable } from '@angular/core';
import {IEmployee } from './employee';

@Injectable()
export class EmployeeService{
    getEmployee(): IEmployee[]{
        return [
            { id : 101, name: 'tom', gender: 'male', salary: 5000, dob: '1/22/1999'},
            { id : 102, name: 'henry', gender: 'male', salary: 8455.22, dob: '5/8/2000'},
            { id : 103, name: 'david', gender: 'male', salary: 6421.35, dob: '3/21/1982'},
            { id : 104, name: 'mary', gender: 'female', salary: 3500, dob: '11/2/1910'}
        ];
    }
}