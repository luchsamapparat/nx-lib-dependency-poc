import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryAModule } from '@poc/library-a';

@NgModule({
  imports: [CommonModule, LibraryAModule]
})
export class LibraryBModule {}
