import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [OverlayLoadingComponent],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  exports: [OverlayLoadingComponent],
})
export class CoreModule {}
