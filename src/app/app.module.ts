import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountApplesComponent } from './count-apples/count-apples.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, CountApplesComponent, ResultComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
