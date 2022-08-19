import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShrinesComponent } from './pages/shrines/shrines.component';
import { AppsComponent } from './pages/apps/apps.component';
import { GamesComponent } from './pages/games/games.component';
import { CreditsComponent } from './pages/credits/credits.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' },
  },
  {
    path: 'shrines',
    component: ShrinesComponent,
    data: { title: 'Shrines' },
  },
  {
    path: 'apps',
    component: AppsComponent,
    data: { title: 'Apps' },
  },
  {
    path: 'games',
    component: GamesComponent,
    data: { title: 'Games' },
  },
  {
    path: 'credits',
    component: CreditsComponent,
    data: { title: 'Credits' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
