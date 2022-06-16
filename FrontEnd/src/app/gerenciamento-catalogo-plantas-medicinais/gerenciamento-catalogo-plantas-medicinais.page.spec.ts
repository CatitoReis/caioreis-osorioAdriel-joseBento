import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GerenciamentoCatalogoPlantasMedicinaisPage } from './gerenciamento-catalogo-plantas-medicinais.page';

describe('GerenciamentoCatalogoPlantasMedicinaisPage', () => {
  let component: GerenciamentoCatalogoPlantasMedicinaisPage;
  let fixture: ComponentFixture<GerenciamentoCatalogoPlantasMedicinaisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciamentoCatalogoPlantasMedicinaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GerenciamentoCatalogoPlantasMedicinaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
