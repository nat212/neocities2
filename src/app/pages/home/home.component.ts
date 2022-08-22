import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blinkies = ['trnsrits.gif', 'bed.gif', 'blinky_38.gif', 'cat.gif'];

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    const script: HTMLScriptElement = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://status.cafe/current-status.js?name=natash';
    script.text = '';
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
