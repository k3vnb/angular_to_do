
//imported from Angular Core
import { NgModule }      from '@angular/core'; //imports general Module code from Angular framework's core library
import { BrowserModule } from '@angular/platform-browser'; //imports code needed to run app in browser. Has built in directives for conditionals & loops in components.
import { AppComponent }   from './app.component'; //refers to the root component (check app/app.component.ts)
import { FormsModule }  from '@angular/forms'; //two-way binding w/ ngModel is almost always used in forms.
@NgModule({
  imports: [ BrowserModule,
              FormsModule ], //array of other modules & content this module requires.
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
