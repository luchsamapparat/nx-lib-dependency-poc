import { async, TestBed } from '@angular/core/testing';
import { LibraryAModule } from './library-a.module';

describe('LibraryAModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibraryAModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibraryAModule).toBeDefined();
  });
});
