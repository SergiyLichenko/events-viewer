import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
  
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

import { userRoutes } from "./user.routes"

@NgModule({
    declarations: [
        LoginComponent,
        ProfileComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(userRoutes)],
    providers: []
})
export class UserModule {

}