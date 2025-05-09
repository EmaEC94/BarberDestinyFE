import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialComponent } from './material.component';
describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [MaterialComponent]
}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
