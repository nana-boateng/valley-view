import { Component, input } from '@angular/core';

@Component({
  selector: 'app-slides',
  template: `
    <p-galleria
      [value]="photosSources()"
      [containerStyle]="{ 'max-width': '100%' }"
      [numVisible]="5"
      [showIndicators]="false"
      [showItemNavigatorsOnHover]="true"
      [showItemNavigators]="true"
    >
      <ng-template pTemplate="item" let-item>
        <img
          [src]="item.itemImageSrc"
          style="width: 100%;"
          [alt]="item.alt"
          class="rounded-md rounded-b-none"
        />
      </ng-template>
      <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center my-2">
          <img
            [src]="item.thumbnailImageSrc"
            [alt]="item.alt"
            style="width: 100px; height: 67px;"
            class="rounded-md"
          />
        </div>
      </ng-template>
    </p-galleria>
  `,
  styleUrls: ['./slides.component.css'],
})
export class SlidesComponent {
  photosSources =
    input<{ itemImageSrc: string; thumbnailImageSrc: string; alt: string }[]>();
}
