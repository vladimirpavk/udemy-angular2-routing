import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

export const appRoutes: Route[] = [
    // { path:'', redirectTo: '/home', pathMatch: 'full' },
     { path: '', component: HomeComponent },
     { path: 'users', component: UsersComponent, children: [
       { path: ':id/:name', component: UserComponent }
     ] },  
     { path: 'servers', component: ServersComponent, children: [
        { path: ':id', component: ServerComponent, resolve: { server : ServerResolver } },
        { path: ':id/edit', component: EditServerComponent }]
     },
     { path: 'not-found', component: PageNotFoundComponent, data: { message: "Some other message"} },
     { path: '**', redirectTo: '/not-found'}
     ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}