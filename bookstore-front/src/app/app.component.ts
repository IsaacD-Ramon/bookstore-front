import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
 templateUrl:'app.component.html',
})
export class AppComponent {
  title = 'bookstore-front';
}
