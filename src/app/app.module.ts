import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { LoadPhotosEffects } from 'app/redux/effects'
import { reducers } from 'app/redux/reducers'
import { JsonplaceholderModule } from 'app/core/jsonplaceholder/jsonplaceholder.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ LoadPhotosEffects ]),

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    JsonplaceholderModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
