import { Component } from '@angular/core';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  authFlag: boolean;

  onAuthFlag(flag: boolean) {
    this.authFlag = flag;
  }
}
