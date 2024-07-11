import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  loginform!:FormGroup;
  student:Register=new Register();
  constructor(private service:RegisterService,private form:FormBuilder){}
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
