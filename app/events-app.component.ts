import { Component } from '@angular/core'
import { EventListComponent } from './events/events-list.component';

@Component({
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EventsAppComponent{

}