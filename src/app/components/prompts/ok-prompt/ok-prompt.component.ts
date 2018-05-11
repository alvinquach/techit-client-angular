import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'app-ok-prompt',
    templateUrl: 'ok-prompt.component.html',
})
export class OkPromptComponent {

    constructor(
        public dialogRef: MatDialogRef<OkPromptComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onOkClick(): void {
        this.dialogRef.close();
    }

}