import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent {
  photos$: Observable<Photo[]>;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.photos$ = this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
