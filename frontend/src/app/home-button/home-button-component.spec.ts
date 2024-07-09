import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesButtonComponent } from './articles-button.component';

describe('ArticlesButtonComponent', () => {
  let component: ArticlesButtonComponent;
  let fixture: ComponentFixture<ArticlesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
