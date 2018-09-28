import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class gitapiService {

  private userName: string;
  private apiKey: string = environment.apiUrl;
  constructor(public http: HttpClient) {
    console.log('service is now ready');
    this.userName = 'phoebeKaranja'
  }

  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.apiKey)
  }
  getUserRepos() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?access_token=" + this.apiKey)

  }
  updateProfile(userName: string) {
    this.userName = userName;
    console.log(this.userName)
  }

}
