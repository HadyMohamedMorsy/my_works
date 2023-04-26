import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { FormComponent } from '../form/form.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule , HeaderComponent , FormComponent , CardComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

}
