import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FactService } from './services/api/service';
import { FactModule } from './facts/module';
import { rootReducer, IAppState, INITIAL_STATE } from '../store'; 
import { AddRemoveActions } from './app.actions';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    NgReduxModule,
    BrowserAnimationsModule,
    DragDropModule,
    FactModule,
    MatButtonModule
  ],
  providers: [FactService, AddRemoveActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>,  devTools: DevToolsExtension) {
    
    const storeEnhancers = devTools.isEnabled() ?
    [ devTools.enhancer() ] :
    [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);
  }
}
