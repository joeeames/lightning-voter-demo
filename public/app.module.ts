import { NgModule, forwardRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent }  from './home/home.component';
import { NameParser } from './admin/nameParser.service';
import { UnreviewedSessionCount } from './sessions/unreviewedSessionCount.service';

import { Sessions } from './sessions/sessions.service';
import { Users } from './security/users.service';
import { Auth } from './security/auth.service';
import { CurrentIdentity } from './security/currentIdentity.service';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { NavComponent } from './nav/nav.component';
import { ZoomInDirective } from './common/zoom-in.directive';
import { TalkDurationPipe } from './common/talkDuration.pipe';
import { DetailPanelComponent } from './common/detailPanel.component'
import { CreateNewSessionComponent } from './home/createNewSession.component';
import { ProfileComponent } from './profile/profile.component';
import { SessionDetailWithVotesComponent } from './sessions/sessionDetailWithVotes.component';
import { SessionDetailComponent } from './sessions/sessionDetail.component';
import { LogoutComponent } from './security/logout.component';
import { LoginComponent } from './security/login.component';
import { UserListComponent } from './admin/userList.component';
import { UserDetailsComponent } from './admin/userDetails.component';
import { ResultsComponent } from './admin/results.component';
import { CreateUsersComponent } from './admin/createUsers.component';

import { UpgradeAdapter, UpgradeAdapterRef } from '@angular/upgrade';

// This is really strange. But you need the module when you create 
// the upgrade adapter, but you also need the created upgrade adapter
// when creating the Module (see below, the call to upgradeNg1Component)
// so we use a forwardRef, and we have to put the upgradeAdapter and the 
// module in the same file
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    HomeComponent,
    DetailPanelComponent,
    CreateNewSessionComponent,
    ProfileComponent,
    SessionDetailWithVotesComponent,
    SessionDetailComponent,
    UnreviewedTalkComponent,
    NavComponent,
    LogoutComponent,
    LoginComponent,
    UserListComponent,
    UserDetailsComponent,
    ResultsComponent,
    CreateUsersComponent,

    ZoomInDirective,
    TalkDurationPipe
  ],
  providers: [
    NameParser, 
    Sessions, 
    UnreviewedSessionCount, 
    Users,
    Auth,
    CurrentIdentity
  ]
})
export class AppModule { }
