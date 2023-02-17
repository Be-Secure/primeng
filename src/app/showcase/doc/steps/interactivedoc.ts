import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'interactive-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>In order to add interactivity to the component, disable <i>readonly</i> and use a binding to <i>activeIndex</i> along with <i>activeIndexChange</i> to control the Steps.</p>
        </app-docsectiontext>
        <div class="card">
            <p-toast></p-toast>
            <p-steps [model]="items" [readonly]="false" [activeIndex]="activeIndex" (activeIndexChange)="onActiveIndexChange($event)"></p-steps>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class InteractiveDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items!: MenuItem[];

    activeIndex: number = 0;

    constructor(public messageService: MessageService) {}

    onActiveIndexChange(event) {
        this.activeIndex = event;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                command: (event: any) => this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label })
            },
            {
                label: 'Seat',
                command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Second Step', detail: event.item.label })
            },
            {
                label: 'Payment',
                command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Third Step', detail: event.item.label })
            },
            {
                label: 'Confirmation',
                command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label })
            }
        ];
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<p-steps [model]="items" [readonly]="false" [activeIndex]="activeIndex" (activeIndexChange)="onActiveIndexChange($event)"></p-steps>`,

        html: `
<div class="card">
    <p-toast></p-toast>
    <p-steps [model]="items" [readonly]="false" [activeIndex]="activeIndex" (activeIndexChange)="onActiveIndexChange($event)"></p-steps>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    templateUrl: './stepsdemo.html',
    providers: [MessageService]
})
export class StepsDemo implements OnInit {

    items!: MenuItem[];

    activeIndex: number = 0;

    constructor(public messageService: MessageService) {}

    onActiveIndexChange(event) {
        this.activeIndex = event;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
            },
            {
                label: 'Seat',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Second Step', detail: event.item.label})
            },
            {
                label: 'Payment',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Third Step', detail: event.item.label})
            },
            {
                label: 'Confirmation',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label})
            }
        ];
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast'
import { StepsDemo } from './stepsdemo';

@NgModule({
    imports: [CommonModule, StepsModule, ToastModule],
    declarations: [SlideMenuDemo]
})
export class StepsDemoModule {}`
    };
}