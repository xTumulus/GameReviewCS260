import { Routes, RouterModule } from '@angular/router';

import { UpcomingComponent } from './page-content/upcoming/upcoming.component';
import { UserFavoritesComponent } from './page-content/user/user-favorites/user-favorites.component';
import { UserInfoComponent } from './page-content/user/user-info/user-info.component';
import { ContactComponent } from './page-content/contact-us/contact.component';
import { ArticleViewComponent } from './page-content/articles/article-view/article-view.component';
import { PodcastListComponent } from './page-content/podcasts/podcast-list/podcast-list.component';
import { AboutComponent } from './page-content/about/about.component';
import { ReviewerInfoComponent } from './page-content/reviewer-info/reviewer-info.component';
import { HomeComponent } from './page-content/home.component';
import { ArticleEditComponent } from './page-content/articles/article-edit/article-edit.component';
import { SignUpComponent } from './page-content/user/sign-up/sign-up.component';
import { EmailLoginComponent } from './page-content/user/email-login/email-login.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'upcoming', component: UpcomingComponent},
    { path: 'reviews', component: ArticleViewComponent},
    { path: 'podcasts', component: PodcastListComponent},
    { path: 'about', component: AboutComponent},
    { path: 'bios', component: ReviewerInfoComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'user/signup', component: SignUpComponent},
    { path: 'user/login', component: EmailLoginComponent},
    { path: 'user/favorites', component: UserFavoritesComponent},
    { path: 'user', component: UserInfoComponent},
    { path: '**', redirectTo: 'home'}
];

export const AppRouting = RouterModule.forRoot(appRoutes);
