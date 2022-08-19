import { Component, OnDestroy, OnInit } from '@angular/core';
import quotes from 'src/fixtures/quotes.json';
import { interval, Subject, takeUntil } from 'rxjs';

interface NavbarLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  quote!: string;
  private readonly quoteInterval = 60 * 1000;
  private unsubscribe$: Subject<void>;
  navbarLinks: NavbarLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About me', path: '/about' },
    { label: 'Get in touch', path: '/contact' },
    { label: 'Shrines', path: '/shrines' },
    { label: "Apps I've made", path: '/apps' },
    { label: "Games I've made", path: '/games' },
    { label: 'Credits', path: '/credits' },
  ];

  ngOnInit() {
    this.refreshQuote();
    this.unsubscribe$ = new Subject();

    interval(this.quoteInterval)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.refreshQuote(true));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private generateNewIndex(allowSame: boolean): number {
    const currIndex = quotes.indexOf(this.quote);
    const generateIndex = () => Math.floor(Math.random() * quotes.length);
    let newIndex;
    do {
      newIndex = generateIndex();
    } while (newIndex === currIndex && !allowSame);
    return newIndex;
  }

  refreshQuote(allowSame = false) {
    this.quote = quotes[this.generateNewIndex(allowSame)];
  }
}
