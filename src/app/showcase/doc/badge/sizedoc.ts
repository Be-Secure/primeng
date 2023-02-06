import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'size-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Badge sizes are adjusted with the <i>size</i> property that accepts <i>large</i> and <i>xlarge</i> as the possible alternatives to the default size. Currently sizes only apply to component mode.</p>
            <div class="card flex justify-content-center">
                <p-badge value="2"></p-badge>
                <p-badge value="4" size="large" severity="warning"></p-badge>
                <p-badge value="6" size="xlarge" severity="success"></p-badge>
            </div>
        </app-docsectiontext>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SizeDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<p-badge value="2"></p-badge>
<p-badge value="4" size="large" severity="warning"></p-badge>
<p-badge value="6" size="xlarge" severity="success"></p-badge>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './badgedemo.html'
})

export class BadgeDemo {
}`
    };
}