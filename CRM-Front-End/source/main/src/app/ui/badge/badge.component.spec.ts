import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';
describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [BadgeComponent]
}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
