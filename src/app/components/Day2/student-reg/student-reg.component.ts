import { Component } from '@angular/core';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent {
  name : string ="";
  age : number =0;
  address:string ="";
  phone: string = "";
  students : {name:string , age:number , address:string , phone:string}[] = [];
  phoneRegex = new RegExp(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/);

  sendStudent(e : Event){
    e.preventDefault();
    if(this.nameVali && this.ageVali && this.addressVali && this.phoneVali)
    {
      this.students.push({name:this.name , age:this.age , address:this.address.toLowerCase() , phone:this.phone});
    }
  }
  get nameVali(){
    return this.name.length > 4;
  }
  get ageVali(){
    return this.age >= 10 && this.age <= 17
  }
  get addressVali(){
    return this.address.toLowerCase() == "alex" || this.address.toLowerCase() == "cairo" || this.address.toLowerCase() == "giza";
  }
  get phoneVali(){
    return this.phoneRegex.test(this.phone);
  }
}
