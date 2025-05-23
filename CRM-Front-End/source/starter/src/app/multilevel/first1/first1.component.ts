import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-first1',
    templateUrl: './first1.component.html',
    styleUrls: ['./first1.component.scss'],
    standalone: true,
    imports: [BreadcrumbComponent],
})
export class First1Component {
  breadscrums = [
    {
      title: 'First 1',
      items: ['Multilevel'],
      active: 'First 1',
    },
  ];
  constructor() {
    //constructor
  }
}
