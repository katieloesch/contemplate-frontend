import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

import { Document as ApiDocument } from './document.dto';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.html',
  styleUrls: ['./documents.scss'],
})
export class Documents implements OnInit {
  pageTitle = 'Document Dashboard';
  documents: ApiDocument[] = [];
  errorMessage = '';

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    // emit immediately (0) and then every 5000 ms
    timer(0, 5000).subscribe(() => this.getDocuments());
  }

  getDocuments(): void {
    this.documentService.getDocuments().subscribe({
      next: (documents) => (this.documents = documents),
      error: (err) => (this.errorMessage = err),
    });
  }
}
