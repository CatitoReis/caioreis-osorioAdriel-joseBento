import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoSementesPage } from './gerenciamento-catalogo-sementes.page';

describe('GerenciamentoCatalogoSementesPage', () => {
  let component: GerenciamentoCatalogoSementesPage;
  let fixture: ComponentFixture<GerenciamentoCatalogoSementesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciamentoCatalogoSementesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GerenciamentoCatalogoSementesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
