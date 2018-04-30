import {Component} from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent{
    columnSpan:number = 2;
    firstName: string = 'pawan';
    lastName: string = 'kumar';
    gender: string = 'Male';
    age: number = 25;
    showDetails: boolean = false;

    toggleDetails(): void{
        this.showDetails = !this.showDetails;
    }
}