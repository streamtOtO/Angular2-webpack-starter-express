/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';
import { UserService} from '../shared/services/user/user.service'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: './main.component.html'
})
export class MainComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState,
    private router: Router,
    private userService: UserService
    ) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  logout() {
    this.userService.logout();
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
