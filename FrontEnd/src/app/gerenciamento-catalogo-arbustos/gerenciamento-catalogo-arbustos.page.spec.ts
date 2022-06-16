import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoArbustosPage } from './gerenciamento-catalogo-arbustos.page';

describe('GerenciamentoCatalogoArbustosPage', () => {
  let component: GerenciamentoCatalogoArbustosPage;
  let fixture: ComponentFixture<GerenciamentoCatalogoArbustosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciamentoCatalogoArbustosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GerenciamentoCatalogoArbustosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
