import { NgModule, forwardRef, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { RouterModule, UrlHandlingStrategy } from "@angular/router";

import { AppComponent } from './app.component';
import { NameParser } from "./admin/nameParser.service";
import { UnreviewedTalkComponent } from "./home/unreviewedTalk.component";
import { TalkDurationPipe } from "./common/talkDuration.pipe";
import { ProfileComponent } from "./profile/profile.component";
import { TOASTR_TOKEN } from "./toastr/toastr.service";
import { NavComponent } from "./nav/nav.component";
import { Sessions } from "./sessions/sessions.service";
import { DetailPanelComponent } from "./common/detailPanel.component";
import { ResultsComponent } from "./admin/results.component";
import { SessionDetailWithVotesComponent } from "./sessions/sessionDetailWithVotes.component";
import { AllSessionsResolver } from "./sessions/allSessions.resolver";
import { AdminGuard } from "./security/admin.guard";
import { Auth } from "./security/auth.service";
import { CurrentIdentity } from "./security/currentIdentity.service";
import { UnreviewedSessionCount } from "./sessions/unreviewedSessionCount.service";

export function getLocation(i: any){ return i.get('$location') }
export function getToastr() { return toastr; }

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { 
    return url.toString().startsWith("/admin/results"); 
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot([
      { path: 'admin/results', component: ResultsComponent, 
        resolve: { sessions: AllSessionsResolver },
        canActivate: [AdminGuard] },
    ], {useHash: true})
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
    NavComponent,
    DetailPanelComponent,
    ResultsComponent,
    SessionDetailWithVotesComponent
  ],
  providers: [
    NameParser,
    { provide: '$location',
      useFactory: getLocation,
      deps: ['$injector'] },
    { provide: TOASTR_TOKEN, useFactory: getToastr },
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    { provide: '$scope', useExisting: '$rootScope' },
    AllSessionsResolver,
    AdminGuard,
    Auth,
    CurrentIdentity,
    UnreviewedSessionCount,
    Sessions    
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
    DetailPanelComponent,
    NavComponent
  ]
})
export class AppModule { }
