import { NgModule, forwardRef, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NameParser } from "./admin/nameParser.service";
import { UnreviewedTalkComponent } from "./home/unreviewedTalk.component";
import { TalkDurationPipe } from "./common/talkDuration.pipe";
import { ProfileComponent } from "./profile/profile.component";
import { TOASTR_TOKEN } from "./toastr/toastr.service";
import { NavComponent } from "./nav/nav.component";
import { Sessions } from "./sessions/sessions.service";

export function getLocation(i: any){ return i.get('$location') }
export function getCurrentIdentity(i: any){ return i.get('currentIdentity') }
export function getToastr() { return toastr; }

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
    NavComponent
  ],
  providers: [
    NameParser,
    { provide: '$location',
      useFactory: getLocation,
      deps: ['$injector'] },
    { provide: 'currentIdentity',
      useFactory: getCurrentIdentity,
      deps: ['$injector'] },
    { provide: TOASTR_TOKEN, useFactory: getToastr },
    Sessions    
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent
  ]
})
export class AppModule { }
