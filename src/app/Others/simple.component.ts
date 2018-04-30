import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { SimpleChange } from '@angular/core';

@Component({
    selector: 'simple',
    template: `You entered: {{simpleInput}}`
})
export class SimpleComponent implements OnChanges, OnInit{  //implements Onchanges is optional
    @Input () simpleInput: string;

    ngOnChanges(changes: SimpleChanges){
        for(let propertyName in changes){
            let change= changes[propertyName];
            let curr= JSON.stringify(change.currentValue);
            let prev= JSON.stringify(change.previousValue);
            //console.log(propertyName + ' : curr :'+ curr + ', prev: '+ prev + ', first change: '+ change.firstChange + ', isFirstChange: '+ change.isFirstChange());
            console.log(`${propertyName}: currValue = ${curr}, prevVal =${prev}`);
        }
    }

    ngOnInit(){
        console.log('pawan');
    }
}