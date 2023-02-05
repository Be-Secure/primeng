import { Component, Input } from '@angular/core';
import { CodeLang } from '../../domain/codelang';

@Component({
    selector: 'import-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"> </app-docsectiontext>
        <app-code [hideToggleCode]="true" [hideStackBlitz]="true" [hideCodeSandbox]="true" [code]="code"></app-code>
    </div>`
})
export class ImportDocComponent {
    value1: string;

    @Input() id: string

    @Input() title: string

    code: CodeLang = {
        html: `import { InputTextModule } from 'primeng/inputtext';`
    };
}
