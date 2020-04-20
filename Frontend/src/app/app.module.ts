import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './complements/header/header.component';
import { FooterComponent } from './complements/footer/footer.component';
import { UserManagerComponent } from './complements/user-manager/user-manager.component';
import { LoginComponent } from './complements/login/login.component';
import { UserListComponent } from './complements/user_manager/user-list/user-list.component';
import { UserInfoComponent } from './complements/user_manager/user-info/user-info.component';
import { AddUserComponent } from './complements/user_manager/add-user/add-user.component';
import { UserItemComponent } from './complements/user_manager/user_list/user-item/user-item.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserManagerComponent,
    LoginComponent,
    UserListComponent,
    UserInfoComponent,
    AddUserComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
