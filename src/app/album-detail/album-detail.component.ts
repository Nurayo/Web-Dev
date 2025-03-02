import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent {
  album$: Observable<Album>;
  albumId: number;
  newTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.album$ = this.albumsService.getAlbum(this.albumId);
  }

  updateTitle() {
    this.album$.subscribe(album => {
      album.title = this.newTitle;
      this.albumsService.updateAlbum(this.albumId, album).subscribe();
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
