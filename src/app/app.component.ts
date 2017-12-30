import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      
      <h3 translate>ChooseLang</h3>
   <button (click)="switchLanguage('en')" type="button" class="btn btn-info">en</button>
   <button (click)="switchLanguage('ru')" type="button" class="btn btn-info">ru</button>
  <router-outlet></router-outlet>
  </div>
  `
,
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
