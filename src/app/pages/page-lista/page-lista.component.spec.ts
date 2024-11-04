import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListaComponent } from './page-lista.component';

describe('PageListaComponent', () => {
  let component: PageListaComponent;
  let fixture: ComponentFixture<PageListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
