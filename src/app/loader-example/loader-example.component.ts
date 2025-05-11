import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-example',
  standalone: false,
  templateUrl: './loader-example.component.html',
  styleUrl: './loader-example.component.scss'
})
export class LoaderExampleComponent {
 isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // simulate loading
  }
}
