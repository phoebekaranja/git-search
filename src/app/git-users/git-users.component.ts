import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gitapiService } from '../git-api.service';
import { Users } from '../username-class/username';
import { repositories } from '../repository-class/repository';
import {Router} from '@angular/router'

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {
  userPage:any;
  users:any;
  repositorys:any;
  userName: string;

  constructor(public service : gitapiService) {
    service:gitapiService;
      this.service.getUserInfo().subscribe(userPage => {
        console.log(userPage);
        this.users = userPage;
      });
          this.service.getUserRepos().subscribe(repositorys => {
            console.log(repositorys);
            this.repositorys = repositorys;

          });
        }

        findUsers() {
          this.service.updateProfile(this.userName);
          this.service.getUserInfo().subscribe(userPage => {
            this.users = userPage;

          });

          this.service.getUserRepos().subscribe(repositorys => {
            this.repositorys = repositorys;

          });
        }

        ngOnInit() {
        }

      }
