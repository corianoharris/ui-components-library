import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import IconComponent from './icon.component';

@NgModule({
  declarations: [],
  imports: [CommonModule,IconComponent,FontAwesomeModule],
  exports: [IconComponent],
  providers: [],
})
export class IconModule {}