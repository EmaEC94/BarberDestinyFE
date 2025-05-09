import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FontAwesomeComponent } from './font-awesome.component';
describe('FontAwesomeComponent', () => {
  let component: FontAwesomeComponent;
  let fixture: ComponentFixture<FontAwesomeComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [FontAwesomeComponent]
}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
