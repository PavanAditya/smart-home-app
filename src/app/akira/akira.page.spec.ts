import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AkiraPage } from './akira.page';

describe('AkiraPage', () => {
  let component: AkiraPage;
  let fixture: ComponentFixture<AkiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AkiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
