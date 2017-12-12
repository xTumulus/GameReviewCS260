import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import 'hammerjs';

// For Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-title/header/header.component';
import { SideTitleComponent } from './page-title/side-title/side-title.component';
import { TabsComponent } from './tabs/tabs.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ArticleViewComponent } from './page-content/articles/article-view/article-view.component';
import { PodcastComponent } from './page-content/podcasts/podcast/podcast.component';
import { PodcastListComponent } from './page-content/podcasts/podcast-list/podcast-list.component';
import { AboutComponent } from './page-content/about/about.component';
import { ReviewerInfoComponent } from './page-content/reviewer-info/reviewer-info.component';
import { HomeComponent } from './page-content/home.component';
import { ArticleEditComponent } from './page-content/articles/article-edit/article-edit.component';
import { AppRouting } from './app.routes';
import { ContactComponent } from './page-content/contact-us/contact.component';
import { UserInfoComponent } from './page-content/user/user-info/user-info.component';
import { UserFavoritesComponent } from './page-content/user/user-favorites/user-favorites.component';
import { UpcomingComponent } from './page-content/upcoming/upcoming.component';
import { FooterComponent } from './page-title/footer/footer.component';
import { AuthService } from './auth.service';
import { ArticleService } from './page-content/articles/article.service';
import { SignUpComponent } from './page-content/user/sign-up/sign-up.component';
import { EmailLoginComponent } from './page-content/user/email-login/email-login.component';
import { SimpleConfirmationComponent } from './simple-confirmation/simple-confirmation.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideTitleComponent,
    TabsComponent,
    SideNavComponent,
    ArticleViewComponent,
    PodcastComponent,
    PodcastListComponent,
    AboutComponent,
    ReviewerInfoComponent,
    HomeComponent,
    ArticleEditComponent,
    ContactComponent,
    UserInfoComponent,
    UserFavoritesComponent,
    UpcomingComponent,
    FooterComponent,
    SignUpComponent,
    EmailLoginComponent,
    SimpleConfirmationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    ArticleService
  ],
  entryComponents: [ArticleEditComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
