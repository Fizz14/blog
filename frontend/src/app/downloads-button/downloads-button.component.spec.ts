import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsButtonComponent } from './downloads-button.component';

describe('DownloadsButtonComponent', () => {
  let component: DownloadsButtonComponent;
  let fixture: ComponentFixture<DownloadsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
