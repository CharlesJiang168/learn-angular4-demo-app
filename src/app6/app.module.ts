import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GithubUsersComponent } from './github/github-users.component';
import { GithubUsersService } from './github/github-users.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GithubUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }


