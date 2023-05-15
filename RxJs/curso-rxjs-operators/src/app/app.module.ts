import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FromComponent } from './components/operadores-criacao/from/from.component';
import { OfComponent } from './components/operadores-criacao/of/of.component';
import { FromEventComponent } from './components/operadores-criacao/from-event/from-event.component';
import { IntervalComponent } from './components/operadores-criacao/interval/interval.component';
import { TimerComponent } from './components/operadores-criacao/timer/timer.component';
import { ThrowErrorComponent } from './components/operadores-criacao/throw-error/throw-error.component';
import { AjaxComponent } from './components/operadores-criacao/ajax/ajax.component';
import { ForkjoinComponent } from './components/operadores-juncao/forkjoin/forkjoin.component';
import { ZipComponent } from './components/operadores-juncao/zip/zip.component';
import { MergeConcatComponent } from './components/operadores-juncao/merge-concat/merge-concat.component';
import { MapComponent } from './components/operadores-transformacao/map/map.component';
import { MapToComponent } from './components/operadores-transformacao/map-to/map-to.component';
import { SwitchMapComponent } from './components/operadores-transformacao/switch-map/switch-map.component';
import { PluckComponent } from './components/operadores-transformacao/pluck/pluck.component';
import { ToArrayComponent } from './components/operadores-transformacao/to-array/to-array.component';
import { FilterComponent } from './components/operadores-filtragem/filter/filter.component';
import { TakeComponent } from './components/operadores-filtragem/take/take.component';
import { TakeUntilComponent } from './components/operadores-filtragem/take-until/take-until.component';
import { TakeWhileComponent } from './components/operadores-filtragem/take-while/take-while.component';
import { SkipComponent } from './components/operadores-filtragem/skip/skip.component';
import { DebouceTimeComponent } from './components/operadores-filtragem/debouce-time/debouce-time.component';
import { SwitchAllComponent } from './components/operadores-juncao/switch-all/switch-all.component';
import { StartWitchComponent } from './components/operadores-juncao/start-witch/start-witch.component';
import { CombineLatestComponent } from './components/operadores-juncao/combine-latest/combine-latest.component';
import { WithLatestFromComponent } from './components/operadores-juncao/with-latest-from/with-latest-from.component';
import { ShareReplayComponent } from './components/operadores-multicasting/share-replay/share-replay.component';
import { ShareComponent } from './components/operadores-multicasting/share/share.component';
import { CatchErrorComponent } from './components/operadores-tratamento-erro/catch-error/catch-error.component';
import { RetryWhenComponent } from './components/operadores-tratamento-erro/retry-when/retry-when.component';
import { TapComponent } from './components/operadores-utilitarios/tap/tap.component';
import { DelayComponent } from './components/operadores-utilitarios/delay/delay.component';
import { TimeoutComponent } from './components/operadores-utilitarios/timeout/timeout.component';
import { EveryComponent } from './components/operadores-boleanos/every/every.component';
import { FindComponent } from './components/operadores-boleanos/find/find.component';
import { FindIndexComponent } from './components/operadores-boleanos/find-index/find-index.component';
import { IsEmptyComponent } from './components/operadores-boleanos/is-empty/is-empty.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    ThrowErrorComponent,
    AjaxComponent,
    ForkjoinComponent,
    ZipComponent,
    MergeConcatComponent,
    MapComponent,
    MapToComponent,
    SwitchMapComponent,
    PluckComponent,
    ToArrayComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    DebouceTimeComponent,
    SwitchAllComponent,
    StartWitchComponent,
    CombineLatestComponent,
    WithLatestFromComponent,
    ShareReplayComponent,
    ShareComponent,
    CatchErrorComponent,
    RetryWhenComponent,
    TapComponent,
    DelayComponent,
    TimeoutComponent,
    EveryComponent,
    FindComponent,
    FindIndexComponent,
    IsEmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
