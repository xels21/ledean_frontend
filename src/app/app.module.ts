import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';

import { LedsService } from './leds/leds.service';
import { ButtonService } from './button/button.service';
import { SystemService } from './system/system.service';
import { WebsocketService } from './websocket/websocket.service';

import { ModeEmitterService } from './modes/mode-emitter/mode-emitter.service';
import { ModeGradientService } from './modes/mode-gradient/mode-gradient.service';
import { ModeSpectrumService } from './modes/mode-spectrum/mode-spectrum.service';
import { ModeRunningLedService } from './modes/mode-running-led/mode-running-led.service';
import { ModeSolidService } from './modes/mode-solid/mode-solid.service';
import { ModeSolidRainbowService } from './modes/mode-solid-rainbow/mode-solid-rainbow.service';
import { ModeTransitionRainbowService } from './modes/mode-transition-rainbow/mode-transition-rainbow.service';
import { ModePictureService } from './modes/mode-picture/mode-picture.service';


import { LedDisplayComponent } from './led-display/led-display.component';
import { ButtonComponent } from './button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ModesComponent } from './modes/modes.component';
import { ModeSolidComponent } from './modes/mode-solid/mode-solid.component';
import { ModeSolidRainbowComponent } from './modes/mode-solid-rainbow/mode-solid-rainbow.component';
import { ModeRunningLedComponent } from './modes/mode-running-led/mode-running-led.component';
import { ModeTransitionRainbowComponent } from './modes/mode-transition-rainbow/mode-transition-rainbow.component';
import { ModeEmitterComponent } from './modes/mode-emitter/mode-emitter.component';
import { ModeGradientComponent } from './modes/mode-gradient/mode-gradient.component';
import { ModeSpectrumComponent } from './modes/mode-spectrum/mode-spectrum.component';
import { ModePictureComponent } from './modes/mode-picture/mode-picture.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NouisliderModule
  ],
  declarations: [
    AppComponent,
    LedDisplayComponent,
    ButtonComponent,
    NavigationComponent,
    ModesComponent,
    ModeSolidComponent,
    ModeSolidRainbowComponent,
    ModeRunningLedComponent,
    ModeTransitionRainbowComponent,
    ModeEmitterComponent,
    ModeGradientComponent,
    ModeSpectrumComponent,
    ModePictureComponent
  ],
  providers: [
    LedsService,
    ButtonService,
    SystemService,
    WebsocketService,
    ModeEmitterService,
    ModeGradientService,
    ModeSpectrumService,
    ModeRunningLedService,
    ModeSolidService,
    ModeSolidRainbowService,
    ModeTransitionRainbowService,
    ModePictureService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
