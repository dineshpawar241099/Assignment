import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  info:any={
    name:'',
    
   };


  constructor(private user: UserService , private FormsModule:FormsModule,
    private router:Router,) { }
    isAccepted = '';

  ngOnInit(): void {
    this.showdata();
 
   }
   onSubmit(): void{
     const info={
       name:this.info.name,
     
    
      
     };
     this.user.register(info).subscribe(info => {
       console.log(info);
       alert('Product registration successful')
       this.router.navigate(['showdata'])
      
     })
   }
 
 
   showdata(){
    this.user.getuser().subscribe(data => {this.info=data;
      console.log(this.info);
      
    });
  }
}
