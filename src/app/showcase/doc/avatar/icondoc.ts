import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'icon-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A font icon is displayed as an Avatar with the <i>icon</i> property.</p>
            <div class="grid card grid-nogutter">
                <div class="col-12 md:col-4">
                    <h5>Icon</h5>
                    <p-avatar icon="pi pi-user" styleClass="mr-2" size="xlarge"></p-avatar>
                    <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }"></p-avatar>
                    <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }"></p-avatar>
                </div>
                <div class="col-12 md:col-4">
                    <h5>Icon - Circle</h5>
                    <p-avatar icon="pi pi-user" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>
                    <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }" shape="circle"></p-avatar>
                    <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" shape="circle"></p-avatar>
                </div>
                <div class="col-12 md:col-4">
                    <h5>Icon - Badge</h5>
                    <p-avatar icon="pi pi-user" pBadge value="4" severity="success" styleClass="mr-2" size="xlarge"></p-avatar>
                </div>
            </div>
        </app-docsectiontext>

        <app-code [code]="code"></app-code>
    </div>`
})
export class IconDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="grid card grid-nogutter">
    <div class="col-12 md:col-4">
    <h5>Icon</h5>
        <p-avatar icon="pi pi-user" styleClass="mr-2" size="xlarge"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{'background-color':'#2196F3', 'color': '#ffffff'}"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{'background-color': '#9c27b0', 'color': '#ffffff'}"></p-avatar>
    </div>
    <div class="col-12 md:col-4">
    <h5>Icon - Circle</h5>
        <p-avatar icon="pi pi-user" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" size="large" [style]="{'background-color':'#2196F3', 'color': '#ffffff'}" shape="circle"></p-avatar>
        <p-avatar icon="pi pi-user" styleClass="mr-2" [style]="{'background-color': '#9c27b0', 'color': '#ffffff'}" shape="circle"></p-avatar>
    </div>
    <div class="col-12 md:col-4">
        <h5>Icon - Badge</h5>
        <p-avatar icon="pi pi-user" pBadge value="4" severity="success" styleClass="mr-2" size="xlarge"></p-avatar>
    </div>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})

export class AvatarDemo {
}`
    };
}