import { NgModule, forwardRef, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, UrlHandlingStrategy }   from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NameParser } from "./admin/nameParser.service";
import { UnreviewedTalkComponent } from "./home/unreviewedTalk.component";
import { TalkDurationPipe } from "./common/talkDuration.pipe";
import { ProfileComponent } from "./profile/profile.component";
import { Toastr, TOASTR_TOKEN } from "./toastr/toastr.service";
import { NavComponent } from "./nav/nav.component";
import { NavWrapperComponent } from "./nav/nav-wrapper.component";
import { Sessions } from "./sessions/sessions.service";
import { DetailPanelComponent } from "./common/detailPanel.component";

export declare var toastr: Toastr;

export function getLocation(i: any){ i.get('$location') }
export function getCurrentIdentity(i: any){ i.get('currentIdentity') }

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
    NavComponent,
    NavWrapperComponent,
    DetailPanelComponent
  ],
  providers: [
    NameParser,
    { provide: '$location',
      useFactory: getLocation,
      deps: ['$injector'] },
    { provide: 'currentIdentity',
      useFactory: getCurrentIdentity,
      deps: ['$injector'] },
    { provide: TOASTR_TOKEN, useValue: toastr },
    Sessions
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
    DetailPanelComponent
  ]
})
export class AppModule { }
