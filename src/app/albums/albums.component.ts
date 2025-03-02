import { Component } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule,NgFor,RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent {
  albums$: Observable<Album[]>;

  constructor(private albumsService: AlbumsService) {
    this.albums$ = this.albumsService.getAlbums();
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums$ = this.albumsService.getAlbums();
    });
  }
}
