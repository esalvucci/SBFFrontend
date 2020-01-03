import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './components/title/title.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { WholeFilterComponent } from './components/whole-filter/whole-filter.component';
import { PerSetComponent } from './components/per-set/per-set.component';
import { FilterParametersComponent } from './components/sidebar/filter-parameters/filter-parameters.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import { ElementsChartComponent } from './components/per-set/charts/elements-chart/elements-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { CellsChartComponent } from './components/per-set/charts/cells-chart/cells-chart.component';
import { EmersionChartComponent } from './components/per-set/charts/emersion-chart/emersion-chart.component';
import { FalsePosProbChartComponent } from './components/per-set/charts/false-pos-prob-chart/false-pos-prob-chart.component';
import { IntersetErrChartComponent } from './components/per-set/charts/interset-err-chart/interset-err-chart.component';
import { APrioriSafeChartComponent } from './components/per-set/charts/a-priori-safe-chart/a-priori-safe-chart.component';
import { PVsNComponent } from './components/whole-filter/charts/p-vs-n/p-vs-n.component';
import { PVsMComponent } from './components/whole-filter/charts/p-vs-m/p-vs-m.component';
import { PVsKComponent } from './components/whole-filter/charts/p-vs-k/p-vs-k.component';
import { SafeVsFppComponent } from './components/whole-filter/charts/safe-vs-fpp/safe-vs-fpp.component';
import { ChartsCardComponent } from './components/whole-filter/charts-card/charts-card.component';
import { ChartsCard1Component } from './components/per-set/charts-card1/charts-card1.component';
import { FinalFilterComponent } from './components/final-filter/final-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    TitleComponent,
    WholeFilterComponent,
    PerSetComponent,
    FilterParametersComponent,
    SidebarComponent,
    ElementsChartComponent,
    CellsChartComponent,
    EmersionChartComponent,
    FalsePosProbChartComponent,
    IntersetErrChartComponent,
    APrioriSafeChartComponent,
    PVsNComponent,
    PVsMComponent,
    PVsKComponent,
    SafeVsFppComponent,
    ChartsCardComponent,
    ChartsCard1Component,
    FinalFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
