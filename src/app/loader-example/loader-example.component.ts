import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

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
      open: false,
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
      open: true,
      loaders: [
        'dot-reveal',
        'dot-progress',
        'dot-wave',
        'dot-pulse',
        'dot-swap',
        'dot-train',
        'dot-bouncing-pass',
        'dot-rotating',
      ],
    },
  ];

  loaderControl = new FormControl('');
  loaderColor = '#1976d2';
  loaderOptions: string[] = ['Loader 1', 'Loader 2', 'Loader 3'];
  filteredLoaders!: Observable<string[]>;

  ngOnInit() {
    this.filteredLoaders = this.loaderControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.loaderOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  toggleAccordion(group: any) {
    group.open = !group.open;
  }

  onColorChange($event: Event) {
    throw new Error('Method not implemented.');
  }
}
