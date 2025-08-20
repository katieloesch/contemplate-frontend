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
  pageTitle: string = 'Document Dashboard';
  documents: ApiDocument[] = [
    {
      title: 'my first doc',
      description: 'first doc description',
      file_url: 'http://startpage.com',
      updated_at: '15/08/2025',
      image_url:
        'https://cdn.pixabay.com/photo/2024/11/18/10/20/businessman-9205819_1280.png',
    },
    {
      title: 'my second doc',
      description: 'second doc description',
      file_url: 'http://startpage.com',
      updated_at: '15/08/2025',
      image_url:
        'https://cdn.pixabay.com/photo/2021/10/05/22/18/employee-6683862_1280.png',
    },
    {
      title: 'my third doc',
      description: 'third doc description',
      file_url: 'http://startpage.com',
      updated_at: '15/08/2025',
      image_url:
        'https://cdn.pixabay.com/photo/2021/10/04/12/15/business-6680123_1280.png',
    },
  ];
}
