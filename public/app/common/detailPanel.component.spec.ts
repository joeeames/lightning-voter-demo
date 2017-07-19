import { TestBed, fakeAsync, tick, async, ComponentFixture, inject } from '@angular/core/testing';
import { DetailPanelComponent } from './detailPanel.component';

describe('detailPanel', function() {
  
  let fixture: ComponentFixture<DetailPanelComponent>;
  let component: DetailPanelComponent;
  let element;
  // let heroes = [
  //   {id: 3, name: 'Magneta', strength: 4},
  //   {id: 4, name: 'Dynama', strength: 2}
  // ];

  beforeEach(async(() => {

    // const mockHeroService = {
    //   getHero: () => Promise.resolve(heroes[0]),
    //   update: () => Promise.resolve()
    // };
    // const mockActivatedRoute = {
    //   params: [ { id: '3' } ]
    // };

    TestBed.configureTestingModule({
      imports: [
        // you must import this so that [(ngModel)] is recognized.
        // FormsModule
      ],
      declarations: [
        DetailPanelComponent
      ],
      providers: [
        // useValue may create a clone of the objects passed
        // { provide: HeroService, useValue: mockHeroService },
        // { provide: ActivatedRoute, useValue: mockActivatedRoute },
        // { provide: Location, useFactory: () => new SpyLocation() }
      ],
      schemas: [
        // NO_ERRORS_SCHEMA will hide that angular doesn't know about ngModel
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DetailPanelComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });
  
  it('should have the title in the html', function() {
    
//     var element = $compile('<detail-panel title="This is the Title"></detail-panel>')($rootScope);
//     $rootScope.$digest();
    
//     expect(element.text()).toContain('This is the Title');
  })
})