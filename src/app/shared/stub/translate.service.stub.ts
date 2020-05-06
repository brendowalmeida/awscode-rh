import { EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { useAnimation } from '@angular/animations';

export class TranslateServiceStub {
    public onLangChange: EventEmitter<any> = new EventEmitter();
    public onTranslationChange: EventEmitter<any> = new EventEmitter();
    public onDefaultLangChange: EventEmitter<any> = new EventEmitter();
    public get() { return of(''); }
    public instant() { return of(''); }
    public translate() {
        function use() {}
     }
}