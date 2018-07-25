import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {SingleMediaPlayer} from './single-media-player';

@NgModule({
    declarations: [SingleMediaPlayer],
    imports: [
        BrowserModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    providers: [],
    bootstrap: [SingleMediaPlayer]
})

export class AppModule 
{

}
