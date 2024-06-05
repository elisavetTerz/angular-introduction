import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crud-create-example',
  standalone: true,
  imports: [
    CrudNavbarComponent, 
    ReactiveFormsModule, 
    CrudNavbarComponent, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './crud-create-example.component.html',
  styleUrl: './crud-create-example.component.css'
})
export class CrudCreateExampleComponent {

}
