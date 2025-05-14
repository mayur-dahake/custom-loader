import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-example',
  standalone: false,
  templateUrl: './loader-example.component.html',
  styleUrl: './loader-example.component.scss',
})
export class LoaderExampleComponent {
  loaderGroups = [
    {
      name: 'Spinners',
      open: true,
      loaders: [
        'spinner-cutout',
        'spinner-border',
        'spinner-multiring',
        'spinner-rotating-dot',
        'spinner-segmented-ring',
        'spinner-angled-arc',
        'spinner-nested-circle',
        'spinner-orbiting-dot',
        'spinner-gear',
        'spinner-stepped-wheel',
        'spinner-rotating-matrix',
        'spinner-circular-fade',
      ],
    },
    {
      name: 'Classic',
      open: false,
      loaders: [
        'text-fading',
        'text-underline-progress',
        'text-typewriter',
        'text-full-typewriter',
        'text-gradient',
        'text-scanner',
      ],
    },
    {
      name: 'Progress Bars',
      open: false,
      loaders: ['bar', 'pulse'],
    },
    {
      name: 'Dots',
      open: false,
      loaders: ['dots'],
    },
  ];

  toggleAccordion(group: any) {
    group.open = !group.open;
  }
}
