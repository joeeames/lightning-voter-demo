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

declare var toastr: Toastr;

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
      useFactory: (i: any) => i.get('$location'),
      deps: ['$injector'] },
    { provide: 'currentIdentity',
      useFactory: (i: any) => i.get('currentIdentity'),
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
