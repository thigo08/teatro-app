import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [NavComponent, FooterComponent],
  declarations: [NavComponent, FooterComponent]
})
export class CoreModule {}
