import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../Recette';
import { RECETTES } from '../RecetteList';
import { TypeColorPipe } from '../type-color.pipe';

@Component({
  selector: 'app-detail-recette',
  standalone: true,
  imports: [CommonModule, TypeColorPipe],
  templateUrl: './detail-recette.component.html',
  styleUrl: './detail-recette.component.css'
})
export class DetailRecetteComponent implements OnInit {
  recetteList: Recette[] = RECETTES;
  recette: Recette|undefined;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    console.log(recetteId);
    this.recette = this.recetteList.find(rec=>rec.id===recetteId);
  }
  goToRecetteList()
  {
    this.router.navigate(["/recettes"]);
  }
}
