export interface IEmployee{    
    id: number;          //members are public by default
    name: string;
    gender: string;
    salary:number;
    dob: string;
    //department?: string;  //optional property

    // computeMonthlySalary(sal: number): number;
}

// export class Employee implements IEmployee{
//     /* public id: number;
//      public name: string;
//      public gender: string;
//      public salary:number;
//      public dob: string;         //long-hand syntax */

//     constructor(public id: number, public name: string, public gender: string, public salary:number, public dob: string){   //short-hand syntax
//         /* this.id=id;
//          this.name=name;
//          this.gender=gender;     //long-hand syntax */
//     }

//     computeMonthlySalary(sal: number):number{
//         return sal/12;
//     }
// }