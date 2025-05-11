import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { LoaderType } from '../loader-type';

@Component({
  selector: 'app-custom-loader',
  standalone: false,
  templateUrl: './custom-loader.component.html',
  styleUrl: './custom-loader.component.scss',
})
export class CustomLoaderComponent {
  @Input() type: LoaderType = 'dots';

  @ViewChild('dots', { static: true }) dotsTemplate!: TemplateRef<any>;
  @ViewChild('bar', { static: true }) barTemplate!: TemplateRef<any>;
  @ViewChild('pulse', { static: true }) pulseTemplate!: TemplateRef<any>;

  loaderTemplateMap: Record<string, TemplateRef<any>> = {};

    hasTemplate(type: string): boolean {
    return !!this.loaderTemplateMap[type];
  }
}
