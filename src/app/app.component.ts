import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiBaseComponent } from './ui-base/ui-base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiBaseComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'EcoTracker';
}
