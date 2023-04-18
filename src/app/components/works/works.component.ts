import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/header/header.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule , HeaderComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

}
