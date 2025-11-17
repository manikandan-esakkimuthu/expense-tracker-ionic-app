import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MenuController,

  ToastController,
} from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    IonicModule
  ],
  providers: [MenuController, ToastController],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
