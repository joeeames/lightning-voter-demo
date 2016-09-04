import { NgModule, forwardRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent }  from './home/home.component';
import { NameParser } from './admin/nameParser.service';
import { Sessions } from './sessions/sessions.service';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { NavComponent } from './nav/nav.component';
import { ZoomInDirective } from './common/zoom-in.directive';
import { TalkDurationPipe } from './common/talkDuration.pipe';
import { DetailPanelComponent } from './common/detailPanel.component'
import { CreateNewSessionComponent } from './home/createNewSession.component';
import { ProfileComponent } from './profile/profile.component';

import { UpgradeAdapter, UpgradeAdapterRef } from '@angular/upgrade';

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
    upgradeAdapter.upgradeNg1Component('sessionDetail'),
    UnreviewedTalkComponent,
    NavComponent,
    ZoomInDirective,
    TalkDurationPipe
  ],
  providers: [
    NameParser, Sessions
  ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/