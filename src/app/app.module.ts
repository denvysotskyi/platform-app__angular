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
import { metaReducers, index } from './auth/store/reducers'
import { environment } from '../environments/environment'
import { TopBarComponent } from './shared/modules/top-bar/components/top-bar/top-bar.component'

@NgModule({
  declarations: [AppComponent, TopBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
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
