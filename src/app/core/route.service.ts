import { Route as ngRoute, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

export class Route {
    static withShell(routes: Routes): ngRoute {
        console.log('ROUTES', routes);

        return {
            path: '',
            component: BaseComponent,
            children: routes,
            // canActivate: [AuthenticationGuard],
            // Reuse ShellComponent instance when navigating between child views
            data: { reuse: true }
        };
    }
}