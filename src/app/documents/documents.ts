import { Component } from '@angular/core';
import { Document as ApiDocument } from './document.dto';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [],
  templateUrl: './documents.html',
  styleUrl: './documents.scss',
})
export class Documents {
  documents: ApiDocument[] = [
    {
      title: 'my first doc',
      description: 'first doc description',
      file_url: 'http://startpage.com',
      updated_at: '15/08/2025',
      image_url: 'http://startpage.com',
    },
    {
      title: 'my second doc',
      description: 'second doc description',
      file_url: 'http://startpage.com',
      updated_at: '15/08/2025',
      image_url: 'http://startpage.com',
    },
    {
      title: 'my third doc',
      description: 'third doc description',
      file_url: 'http://startpage.com',
      updated_at: '15/08/2025',
      image_url: 'http://startpage.com',
    },
  ];
}
