  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SuperheroesService } from '../../services/superheroes.service';

  @Component({
    selector: 'app-detalle',
    standalone: true,
    imports: [
      CommonModule,
      RouterModule
    ],

    templateUrl: './detalle.component.html',
    styleUrl: './detalle.component.scss'
  })
  export class DetalleComponent {


    hero: any = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private heroesService: SuperheroesService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);

    this.heroesService.getHeroById(id).subscribe({
      next: (res) => {
        this.hero = res;
        this.loading = false;
        console.log("Hero cargado:", this.hero);
      },
      error: (err) => {
        this.error = "Error cargando el héroe";
        this.loading = false;
        console.error(err);
      }
    });
  }
}
