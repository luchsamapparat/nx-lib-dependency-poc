import { async, TestBed } from '@angular/core/testing';
import { LibraryBModule } from './library-b.module';

describe('LibraryBModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibraryBModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibraryBModule).toBeDefined();
  });
});
