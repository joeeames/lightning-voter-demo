import { NgModule, forwardRef, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, UrlHandlingStrategy }   from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent
  ]
})
export class AppModule { }
