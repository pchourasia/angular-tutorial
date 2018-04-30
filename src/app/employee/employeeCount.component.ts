import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'employee-count',
    templateUrl: './employeeCount.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeCountComponent{
    @Input()
    all:number;

    @Input()
    male:number;

    @Input()
    female:number;

    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioBtnSelectionChanged: EventEmitter<string> =new EventEmitter<string>();

    onRadioBtnSelectionChange(){
        this.countRadioBtnSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}