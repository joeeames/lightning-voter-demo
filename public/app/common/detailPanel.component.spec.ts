import { TestBed, fakeAsync, tick, async, ComponentFixture, inject } from '@angular/core/testing';
import { DetailPanelComponent } from './detailPanel.component';

describe('detailPanel', function() {
  
  let fixture: ComponentFixture<DetailPanelComponent>;
  let component: DetailPanelComponent;
  let element;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        DetailPanelComponent
      ],
    })

    fixture = TestBed.createComponent(DetailPanelComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });
  
  it('should have the title in the html', async(() => {
    component.title = 'This is the Title';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelector('div').textContent).toContain('This is the Title');
    });
  }));
})