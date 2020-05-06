import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SearchPipe } from './pipes/search.pipe';
import { ConfirmDeleteDialog } from './dialogs/confirm-dialog/confirm-delete-dialog';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchPipe,
    ConfirmDeleteDialog
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    SearchPipe
  ],
  exports: [
    HeaderComponent,
    SearchPipe,
    ConfirmDeleteDialog
  ]
})
export class SharedModule { }
