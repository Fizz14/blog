import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsViewComponent } from './downloads-view.component';

describe('DownloadsViewComponent', () => {
  let component: DownloadsViewComponent;
  let fixture: ComponentFixture<DownloadsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
