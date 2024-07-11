import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  loginform!:FormGroup;
  student:Register=new Register();
  constructor(private service:RegisterService,private form:FormBuilder){
    this.loginform=this.form.group({
      name:['',Validators.required,Validators.maxLength(10),Validators.minLength(4),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      email:['',Validators.required,Validators.email],
      PhoneNo:['',Validators.required,Validators.maxLength(10),Validators.minLength(10)],
      password:['',Validators.required,Validators.maxLength(10),Validators.minLength(4),Validators.pattern('/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g')]

    })
  }
  
  ngOnInit():void{}
  onsubmit():void{
   this.service.onsubmit(this.student).subscribe(response=>{
   console.log("Successfully Registered",response);
    Swal.fire("Successfully inserted",'success','success');
   },
   error=>{
    console.error("Failed",error);
    Swal.fire("Error");
   }
   
   )
  }


}
