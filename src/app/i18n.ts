import {
    ModuleTranslateLoader,
    IModuleTranslationOptions
  } from '@larscom/ngx-translate-module-loader';
  import { HttpClient } from '@angular/common/http';
import { Language } from './shared/constants/language';
  
  export function ModuleHttpLoaderFactory(http: HttpClient) {
    const baseTranslateUrl = Language.URL;
  
    const options: IModuleTranslationOptions = {
      modules: [
        { baseTranslateUrl },
        { moduleName: 'AuthModule', baseTranslateUrl },
        { moduleName: 'SharedModule', baseTranslateUrl },
        { moduleName: 'EmployeesModule', baseTranslateUrl },
      ]
    };
    return new ModuleTranslateLoader(http, options);
}