import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifapiComponent } from './gifapi.component';

describe('GifapiComponent', () => {
  let component: GifapiComponent;
  let fixture: ComponentFixture<GifapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
