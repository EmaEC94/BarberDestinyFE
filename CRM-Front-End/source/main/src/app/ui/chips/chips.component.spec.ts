import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChipsComponent } from './chips.component';
describe('ChipsComponent', () => {
  let component: ChipsComponent;
  let fixture: ComponentFixture<ChipsComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ChipsComponent]
}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
