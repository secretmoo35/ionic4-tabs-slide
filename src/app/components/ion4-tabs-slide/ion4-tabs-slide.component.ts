import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Slides } from '@ionic/angular';

@Component({
  selector: 'app-ion4-tabs-slide',
  templateUrl: './ion4-tabs-slide.component.html',
  styleUrls: ['./ion4-tabs-slide.component.scss']
})
export class Ion4TabsSlideComponent implements OnInit {

  @ViewChild('slider') slider: Slides;
  @ViewChild('segments', { read: ElementRef }) segments: ElementRef;
  @Input() items: Array<any> = [];
  page: any = '0';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.slideChanged();
  }

  selectedTab(index) {
    this.slider.slideTo(index);
  }

  slideChanged() {
    this.slider.getActiveIndex().then((index) => {
      let slides_count = this.segments.nativeElement.childElementCount;
      this.page = index.toString();
      if (this.page >= slides_count) {
        this.page = (slides_count - 1).toString();
      }
      this.centerScroll();
    });
  }

  centerScroll() {
    if (!this.segments || !this.segments.nativeElement) {
      return;
    }
    let sizeLeft = this.sizeLeft();
    let sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
    let result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent / 2);

    result = (result > 0) ? result : 0;
    this.smoothScrollTo(result);
  }

  sizeLeft() {
    let size = 0;
    for (let i = 0; i < this.page; i++) {
      size += this.segments.nativeElement.children[i].clientWidth;
    }
    return size;
  }

  easeInOutQuart(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) {
      return distance / 2 * time * time * time * time + from;
    } else {
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }
  }

  smoothScrollTo(endX) {
    let startTime = new Date().getTime();
    let startX = this.segments.nativeElement.scrollLeft;
    let distanceX = endX - startX;
    let duration = 400;
    let timeout = 1000 / 60;
    let timer = setInterval(() => {
      var time = new Date().getTime() - startTime;
      var newX = this.easeInOutQuart(time, startX, distanceX, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      this.segments.nativeElement.scrollLeft = newX;
    }, timeout);
  }
}
