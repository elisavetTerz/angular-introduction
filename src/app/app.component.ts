import { Component } from '@angular/core';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from "./components/person-table.component";
// import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [PersonTableComponent]
})
export class AppComponent {
  name: string = 'Elisavet';

  person0: Person = {
    givenName: 'Christodoulos',
    surName: 'Fragkoudakis',
    age: 0x37,
    email: 'chfrag@aueb.gr',
    address: 'Athens, Greece',
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA',
  };
}
