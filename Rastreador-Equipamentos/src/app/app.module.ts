import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { SocialMediasComponent } from './components/reusable-components/social-medias/social-medias.component';
import { ButtonComponentComponent } from './components/reusable-components/button-component/button-component.component';
import { LogoComponentComponent } from './components/reusable-components/logo-component/logo-component.component';
import { NavMenuComponentComponent } from './components/header-component/nav-menu-component/nav-menu-component.component';
import { MapComponentComponent } from './components/body-component/map-component/map-component.component';
import { AsideFilterListComponentComponent } from './components/body-component/aside-filter-list-component/aside-filter-list-component.component';
import { HistoricalEquipamentComponentComponent } from './components/body-component/historical-equipament-component/historical-equipament-component.component';
import { CopyrightAikoInfosComponentComponent } from './components/footer-component/copyright-aiko-infos-component/copyright-aiko-infos-component.component';
import { AikoInfoComponentComponent } from './components/footer-component/Copyright-aikoInfo-component/aiko-info-component/aiko-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponentComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    SocialMediasComponent,
    ButtonComponentComponent,
    LogoComponentComponent,
    NavMenuComponentComponent,
    MapComponentComponent,
    AsideFilterListComponentComponent,
    HistoricalEquipamentComponentComponent,
    CopyrightAikoInfosComponentComponent,
    AikoInfoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
