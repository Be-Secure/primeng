import { Component, Input } from '@angular/core';

@Component({
    selector: 'props-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>pValidateOnly</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, instead of blocking keys, input is validated internally to test against the regular expression.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class PropsDocComponent {
    @Input() id: string;

    @Input() title: string;
}