import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>InputText is applied to an input field with pInputText directive.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <input type="text" pInputText [(ngModel)]="value" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    value: string;

    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<input type="text" pInputText [(ngModel)]="value" />`,

        html: `
<div class="card flex justify-content-center">
    <input type="text" pInputText [(ngModel)]="value" />
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inputtextdemo.html'
})

export class InputTextDemo {
    value: string;
}`
    };
}
