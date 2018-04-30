import {Component, transition, style} from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string =  'Employee Details';
  imagePath: string = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  imgPath: string = 'images/logos/angular/logo-nav@2x.png';
  isDisabled: boolean = true;
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  badHtml: string = '<script>alert("hello");</script>';
  boldItalicStyle: string = 'boldClass italicClass';
  applyBoldClass: boolean = true;
  applyItalicClass: boolean = true;
  fontSize:number = 20;
  ngOnChangesText: string= "pawan";

  addClasses(){
    let classes={
      boldClass: this.applyBoldClass,
      italicClass: this.applyItalicClass
    };
    return classes;
  }

  addStyles(){
    let styles={
      'font-weight':this.applyBoldClass ? 'bold': 'normal',
      'font-style': this.applyItalicClass? 'italic' : 'normal',
      'font-size.px': this.fontSize
    };
    return styles;
  }

  getFullName(): string{
    return this.firstName + ' ' + this.lastName;
  }

  onClick(){
    alert("click ok");
  }
}