import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAgregarComponent } from './page-agregar.component';

describe('PageAgregarComponent', () => {
  let component: PageAgregarComponent;
  let fixture: ComponentFixture<PageAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAgregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
