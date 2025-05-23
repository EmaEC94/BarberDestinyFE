import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ChatComponent]
}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
