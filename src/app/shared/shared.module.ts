import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, MainLayoutComponent, LoginComponent],
  imports: [CommonModule, SharedRoutingModule, TranslateModule,FormsModule,ReactiveFormsModule],
  exports: [MainLayoutComponent], // dış modüllerin kullanabileceği, dışarıya export edilen modüller
})
export class SharedModule {}
