import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import {RouterModule, Routes} from '@angular/router';
import { GitUsersComponent } from './git-users/git-users.component';
import { gitapiService } from './git-api.service';
import { RepositoryComponent } from './repository/repository.component';
// import {RoutingModule} from './router/router.module';
import { StrikethroughDirective } from './strikethrough.directive';
import { timeellapsedPipe } from './time-ellapsed-pipe.pipe';
// import { GitApiComponent } from './git-api/git-api.component';





@NgModule({
  declarations: [
    AppComponent,
    // gitapiComponent,
    RepositoryComponent,
    timeellapsedPipe,
    StrikethroughDirective,
    GitUsersComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
    // RoutingModule,
  ],
  providers: [gitapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
