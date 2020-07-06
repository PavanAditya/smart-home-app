import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoblinsPage } from './goblins.page';

describe('GoblinsPage', () => {
  let component: GoblinsPage;
  let fixture: ComponentFixture<GoblinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoblinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
