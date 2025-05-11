import { Component } from '@angular/core';
import { LoaderType } from '../loader-type';

@Component({
  selector: 'app-loader-example',
  standalone: false,
  templateUrl: './loader-example.component.html',
  styleUrl: './loader-example.component.scss',
})
export class LoaderExampleComponent {
  loaders: LoaderType[] = [
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

    // ... add more as needed
  ];

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
      name: 'Progress Bars',
      open: false,
      loaders: ['bar', 'pulse'],
    },
    {
      name: 'Dots',
      open: false,
      loaders: ['dots'],
    },
    {
      name: 'Classic',
      open: false,
      loaders: ['dots'],
    },
  ];

  toggleAccordion(group: any) {
    group.open = !group.open;
  }
}
