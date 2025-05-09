import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditorsComponent } from './editors.component';
describe('EditorsComponent', () => {
  let component: EditorsComponent;
  let fixture: ComponentFixture<EditorsComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [EditorsComponent]
}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
