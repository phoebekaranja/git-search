import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gitapiService } from '../git-api.service';
import { Users } from '../username-class/username';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
    users:any;
    repositories:any;
    userName: string;
    constructor(public gitapiservice : gitapiService){


      this.gitapiservice.getUserInfo().subscribe((userPage)=>{
        // console.log(userPage);
        this.users = userPage;
      });
      this.gitapiservice.getUserRepos().subscribe((repositories)=>{
          this.repositories = repositories;
          console.log(this.repositories);

        });
        // findUsers() {
        //   this.service.updateProfile(this.userName);
        //   this.service.getUserInfo().subscribe(userPage => {
        //     console.log(userPage);
        //     this.users = userPage;
        //   });
        // });

  }


        ngOnInit(){

      }

  }
