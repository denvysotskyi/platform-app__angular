import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { RegisterEffect } from './auth/store/effects/register.effect'
import { LoginEffect } from './auth/store/effects/login.effect'
import { TopBarModule } from './shared/modules/top-bar/top-bar.module'
import { metaReducers, index } from './auth/store/reducers'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    TopBarModule,
    StoreModule.forRoot(index, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([RegisterEffect, LoginEffect])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
