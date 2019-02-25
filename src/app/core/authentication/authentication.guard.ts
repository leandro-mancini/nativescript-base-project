import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(): boolean {
        // if (this.authenticationService.isAuthenticated()) {
        //     return true;
        // }

        console.log('Não autenticado, redirecionando...');

        this.router.navigate(['/login'], { replaceUrl: true });
        
        return false;
    }

}