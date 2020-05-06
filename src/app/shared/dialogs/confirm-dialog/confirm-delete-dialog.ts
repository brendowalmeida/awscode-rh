import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { IConfirmDeleteDialog } from '../../interfaces/confirm.delete.interface';

@Component({
    selector: 'confirm-delete-dialog',
    templateUrl: './confirm-delete-dialog.html',
    styleUrls: ['./confirm-delete-dialog.scss']
})
export class ConfirmDeleteDialog {

    public description: string;
    public info: IConfirmDeleteDialog; 

    constructor(
        public dialogRef: MatDialogRef<ConfirmDeleteDialog>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private translate: TranslateService
    ) {
        this.setData(data);
    }

    setData(data) {
        if(data.info) {
            this.info = data.info;
            this.description = this.translate.instant('CONFIRM_DELETE_DIALOG.MESSAGE').replace('%s', this.info.name);
        } else {
            console.log('Dialog closed because not have info.');
            this.close();
        }
    }

    confirmAction() {
        this.dialogRef.close({ data: this.info });
    }

    close(): void {
        this.dialogRef.close();
    }
}
