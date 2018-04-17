import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated().then(
            (authenticated:boolean)=>{
                if(authenticated){
                    return true;
                }
                else{
                    console.log("not");
                    this.router.navigate(['/'], {relativeTo: this.route});
                }
            }
        )
    }
}