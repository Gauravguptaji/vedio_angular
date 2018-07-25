import {Component, Directive, Input, ViewChild,} from '@angular/core';

@Component(
    {
        selector:'app-root',
        //template:'<h1>hello</h1>'
        templateUrl:'./app.component.html'
    }
)
export class SingleMediaPlayer
{
@ViewChild('videoPlayer') videoplayer: any;

    toggleVideo(event: any) {
        this.videoplayer.nativeElement.play();
    }
}