import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './shared/constants/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public translate: TranslateService) {
    this.setTranslate();
  }

  setTranslate(): void {
    this.translate.addLangs([Language.PT, Language.EN]);
    this.translate.setDefaultLang(Language.PT);

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|pt/) ? browserLang : Language.PT);
  }
}
