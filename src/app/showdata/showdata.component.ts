import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  info: any

  constructor(private user: UserService,private http:HttpClient,private formmodule:FormsModule,private router:Router) { }

 
  ngOnInit(): void {
    this.showdata();
}


onDeleteuser(id:string) {
  this.http.delete('http://localhost:7000/user/delete?id='+id+'').subscribe(
    (resp)=>{
      console.log(resp)
      
      alert('Are you sure you want to delete this user?');
      this.showdata();
     
    }  
);    
}
onUpdateuser(id:string) {
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
