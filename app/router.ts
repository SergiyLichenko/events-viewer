import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventListComponent,
    EventResolver,
    EventsListResolveService,
} from './events/index';

import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { userRoutes } from './user/user.routes';

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: { events: EventsListResolveService } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', children: userRoutes }
];
