import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoArvoresPage } from './gerenciamento-catalogo-arvores.page';

describe('GerenciamentoCatalogoArvoresPage', () => {
  let component: GerenciamentoCatalogoArvoresPage;
  let fixture: ComponentFixture<GerenciamentoCatalogoArvoresPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciamentoCatalogoArvoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GerenciamentoCatalogoArvoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
