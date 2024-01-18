import { Routes } from "@angular/router";
import { ForgetPasswordComponent } from "./Auth/forget-password/forget-password.component";
import { LoginComponent } from "./Auth/login/login.component";
import { SignUpComponent } from "./Auth/sign-up/sign-up.component";

const routerConfig: Routes = [
     { path : "login",
    component: LoginComponent,
    title: "login Page"  },
    { path : "signUp",
    component: SignUpComponent,
     title: "SignUp Page" },
    { path : "forget-password",
    component: ForgetPasswordComponent,
    title :"Forget Password" },
    {     path: '',
        redirectTo: "/login",
        pathMatch:'full'  }
];

export default routerConfig;