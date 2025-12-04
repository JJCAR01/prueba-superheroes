import { Component } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  heroes: any[] = [];
  page = 1;
  size = 10;
  totalPages = 1;

  constructor(
    private heroesService: SuperheroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes() {
    this.heroesService.getHeroes(this.page, this.size).subscribe(res => {
      console.log(res);
      this.heroes = res.items;
      this.totalPages = res.lastPage;
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadHeroes();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadHeroes();
    }
  }

  openHero(hero: any) {
    this.router.navigate(['/hero', hero.id]);
  }

}
