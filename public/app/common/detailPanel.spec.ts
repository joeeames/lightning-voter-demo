import { TestBed } from '@angular/core/testing';
import { DetailPanelComponent } from "./detailPanel.component";
import { ComponentFixture } from "@angular/core/testing";
import { async } from "@angular/core/testing";

describe('detailPanel', function() {
  let fixture: ComponentFixture<DetailPanelComponent>;
  let component: DetailPanelComponent;
  let element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailPanelComponent
      ]
    })

    fixture = TestBed.createComponent(DetailPanelComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  })

  it('should have the title in the html', async(() => {
    component.title = 'This is the Title';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelector('div').textContent).toContain('This is the Title');
    });
  }));
})
  
//   var $compile,
//       $rootScope
  
//   beforeEach(module('app'));
//   beforeEach(module('/components/detailPanel.html'));
  
//   beforeEach(inject(function(_$compile_, _$rootScope_) {
//     $compile = _$compile_;
//     $rootScope = _$rootScope_;
//   }))
  
//   it('should have the title in the html', function() {
    
//     var element = $compile('<detail-panel title="This is the Title"></detail-panel>')($rootScope);
//     $rootScope.$digest();
    
//     expect(element.text()).toContain('This is the Title');
//   })
// })