import { Component } from '@angular/core';

interface ContactLinks {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  links: ContactLinks[] = [
    {
      icon: 'fa-brands fa-square-tumblr',
      url: 'https://natashthetrash.tumblr.com',
      label: 'Tumblr',
    },
    {
      icon: 'fa-brands fa-square-github',
      url: 'https://github.com/nat212',
      label: 'GitHub',
    },
  ];
}
