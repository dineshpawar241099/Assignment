import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  info:any={
    name:'',
   
   };

  constructor(private user: UserService , private FormsModule:FormsModule,private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.showdata();
   
  }
 
  onUpdateuser() {
    const info={
      name:this.info.name,
     
     
    };
    this.user.updateuser('http://localhost:7000/user/update').subscribe(
      (resp)=>{
        console.log(info)
        
        alert('User updated  succesfully!')
        this.router.navigate(['showdata'])
      }
     );
}
showdata(){
  this.user.getuser().subscribe(data => {this.info=data;
    console.log(this.info);
    
  });
}

}
