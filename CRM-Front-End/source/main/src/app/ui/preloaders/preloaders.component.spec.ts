import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PreloadersComponent } from './preloaders.component';
describe('PreloadersComponent', () => {
  let component: PreloadersComponent;
  let fixture: ComponentFixture<PreloadersComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [PreloadersComponent]
}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
