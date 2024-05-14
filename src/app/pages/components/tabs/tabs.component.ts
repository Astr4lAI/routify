// import { Component } from '@angular/core';
// import {MatTabsModule} from '@angular/material/tabs';


// @Component({
//   selector: 'tabs.component',
//   templateUrl: 'tabs.component.html',
//   styleUrl: 'tabs.component.scss',
//   standalone: true,
//   imports: [MatTabsModule],
// })
// export class TabsComponent {}


import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'tabs.component',
  templateUrl: 'tabs.component.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupBasicExample {}


