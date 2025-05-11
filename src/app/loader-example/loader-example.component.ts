import { Component } from '@angular/core';
import { LoaderType } from '../loader-type';

@Component({
  selector: 'app-loader-example',
  standalone: false,
  templateUrl: './loader-example.component.html',
  styleUrl: './loader-example.component.scss'
})
export class LoaderExampleComponent {

loaders: LoaderType[] = [
    'spinner-cutout',
    'spinner-border',
    'spinner-multiring',
    'spinner-rotating-dot',
    'spinner-segmented-ring',
    'spinner-angled-arc',
    'spinner-nested-circle'

    // ... add more as needed
  ];
}
