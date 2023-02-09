import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { Code } from '../../domain/code';
import { PhotoService } from '../../service/photo.service';

@Component({
    selector: 'advanced-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Simple example with indicators only.</p>
        </app-docsectiontext>
        <div class="card">
            <p-galleria
                #galleria
                [(value)]="images"
                [(activeIndex)]="activeIndex"
                [numVisible]="5"
                [showThumbnails]="showThumbnails"
                [showItemNavigators]="true"
                [showItemNavigatorsOnHover]="true"
                [circular]="true"
                [autoPlay]="true"
                [transitionInterval]="3000"
                [containerStyle]="{ width: '100%' }"
                [containerClass]="galleriaClass()"
            >
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.previewImageSrc" [ngStyle]="{ width: !fullscreen ? '100%' : '', display: !fullscreen ? 'block' : '' }" />
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                    <div class="grid grid-nogutter justify-content-center">
                        <img [src]="item.thumbnailImageSrc" />
                    </div>
                </ng-template>
                <ng-template pTemplate="footer" let-item>
                    <div class="custom-galleria-footer">
                        <button type="button" pButton icon="pi pi-list" (click)="onThumbnailButtonClick()"></button>
                        <span *ngIf="images" class="title-container">
                            <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                            <span class="title">{{ images[activeIndex].title }}</span>
                            <span>{{ images[activeIndex].alt }}</span>
                        </span>
                        <button type="button" pButton [icon]="fullScreenIcon()" (click)="toggleFullScreen()" class="fullscreen-button"></button>
                    </div>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [PhotoService]
})
export class AdvancedDocComponent implements OnInit, OnDestroy {
    @Input() id: string;

    @Input() title: string;

    images: any[];

    showThumbnails: boolean;

    fullscreen: boolean = false;

    activeIndex: number = 0;

    onFullScreenListener: any;

    @ViewChild('galleria') galleria: Galleria;

    constructor(private photoService: PhotoService, private cd: ChangeDetectorRef) {}

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.bindDocumentListeners();
    }

    onThumbnailButtonClick() {
        this.showThumbnails = !this.showThumbnails;
    }

    toggleFullScreen() {
        if (this.fullscreen) {
            this.closePreviewFullScreen();
        } else {
            this.openPreviewFullScreen();
        }

        this.cd.detach();
    }

    openPreviewFullScreen() {
        let elem = this.galleria.element.nativeElement.querySelector('.p-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
        } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
    }

    onFullScreenChange() {
        this.fullscreen = !this.fullscreen;
        this.cd.detectChanges();
        this.cd.reattach();
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
        } else if (document['webkitExitFullscreen']) {
            document['webkitExitFullscreen']();
        } else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
        }
    }

    bindDocumentListeners() {
        this.onFullScreenListener = this.onFullScreenChange.bind(this);
        document.addEventListener('fullscreenchange', this.onFullScreenListener);
        document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.addEventListener('msfullscreenchange', this.onFullScreenListener);
    }

    unbindDocumentListeners() {
        document.removeEventListener('fullscreenchange', this.onFullScreenListener);
        document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
        this.onFullScreenListener = null;
    }

    ngOnDestroy() {
        this.unbindDocumentListeners();
    }

    galleriaClass() {
        return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
    }

    fullScreenIcon() {
        return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
    }
    code: Code = {
        html: `
<div class="card">
    <p-galleria #galleria [(value)]="images" [(activeIndex)]="activeIndex" [numVisible]="5" [showThumbnails]="showThumbnails" [showItemNavigators]="true" [showItemNavigatorsOnHover]="true" [circular]="true" [autoPlay]="true" [transitionInterval]="3000" [containerStyle]="{'width':'100%'}" [containerClass]="galleriaClass()"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { PhotoService } from '../../service/photo.service';

@Component({
    templateUrl: './galleriademo.html',
    styleUrls: ['./galleriademo.scss'],
    providers: [PhotoService]
})

export class GalleriaDemo implements OnInit, OnDestroy {
    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,
        scss: `
:host ::ng-deep {
    .custom-galleria {
        &.p-galleria {
            &.fullscreen {
                display: flex;
                flex-direction: column;
    
                .p-galleria-content {
                    flex-grow: 1;
                    justify-content: center;
                }
            }
    
            .p-galleria-content {
                position: relative;
            }
    
            .p-galleria-thumbnail-wrapper {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
            }
    
            .p-galleria-thumbnail-items-container {
                width: 100%;
            }
    
            .custom-galleria-footer {
                display: flex;
                align-items: center;
                background-color: rgba(0, 0, 0, .9);
                color: #ffffff;
    
                > button {
                    background-color: transparent;
                    color: #ffffff;
                    border: 0 none;
                    border-radius: 0;
                    margin: .2rem 0;
    
                    &.fullscreen-button {
                        margin-left: auto;
                    }
    
                    &:hover {
                        background-color: rgba(255, 255, 255, 0.1);
                    }
                }
            }
    
            .title-container {
                > span {
                    font-size: .9rem;
                    padding-left: .829rem;
    
                    &.title {
                        font-weight: bold;
                    }
                }
            }
        }
    }
}`
    };
}