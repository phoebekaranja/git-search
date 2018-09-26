import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
User = "https://api.github.com/users/"
access="?access_token=42da8b4f4c5a81e11fd3ac0569ff619784307d4d"
users:any;
constructor(private http:HttpClient){ };
searchUsers (search:HTMLInputElement){
  let fullLink=this.User +search.value+this.access;
  this.http.get(fullLink).subscribe((res)=>{
    this.users=res;
    console.log(this.users);
  });
}
ngOnInit() {
}
}
