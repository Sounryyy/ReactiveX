import {NgModule} from '@angular/core';
import {SearchBoxComponent} from './search-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpService} from '../../shared/http.service';
import {CommonModule} from '@angular/common';
import {AutofocusDirective} from '../../shared/autofocus.directive';
import {LabelDirective} from '../../shared/label.directive';
import {PluralizePipe} from '../../shared/pluralize.pipe';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule],
  exports: [SearchBoxComponent],
  declarations: [SearchBoxComponent, AutofocusDirective, LabelDirective, PluralizePipe],
  providers: [HttpService],
})
export class SearchBoxModule {
}