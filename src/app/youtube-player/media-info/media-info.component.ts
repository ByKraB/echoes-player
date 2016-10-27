import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import './media-info.less';

@Component({
  moduleId: module.id,
  selector: 'media-info',
  template: `
  <article class="media-info ellipsis">
    <h3 class="yt-media-title ellipsis">
      <aside class="pull-left"
        title="maximize / minimize"
        (click)="handleThumbClick()">
        <img src="{{ player?.media?.snippet?.thumbnails?.default?.url }}">
        <i class="fa fa-arrows-alt" [ngClass]="{ 'invisible': minimized }"></i>
      </aside>
      <a class="title">{{ player?.media?.snippet?.title }}</a>
    </h3>
  </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaInfoComponent implements OnInit {
  @Input() player: any = {};
  @Input() minimized: boolean = false;
  @Output() thumbClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handleThumbClick () {
    this.thumbClick.next();
  }
}