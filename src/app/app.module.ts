import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventListComponent,
    EventThumbnailComponent,
    UpvoteComponent,
    DurationPipe,
    LocationValidator,
    EventResolver,
    EventsListResolveService,
    VoterService,
    EventService,
} from './events/index';

import {
    IToastr,
    JQ_TOKEN,
    TOASTR_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
} from './common/index';

import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { Error404Component } from './errors/404.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './app.component';

import { AuthService } from './user/shared/auth.service';

import './rxjs-extensions';

let toastr: IToastr = window['toastr'];
let jQuery: Object = window['$'];

@NgModule({
    declarations: [EventsAppComponent,
        EventThumbnailComponent,
        NavBarComponent,
        ModalTriggerDirective,
        LocationValidator,
        UpvoteComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        CreateSessionComponent,
        CreateEventComponent,
        EventDetailsComponent,
        SessionListComponent,
        Error404Component,
        EventListComponent,
        DurationPipe],

    imports: [BrowserModule,
        ReactiveFormsModule,
        UserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule],
    providers: [
        EventService,
        EventResolver,
        AuthService,
        VoterService,
        EventsListResolveService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr,
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery,
        },
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState,
        }],

    bootstrap: [EventsAppComponent],
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');

    return true;
}
