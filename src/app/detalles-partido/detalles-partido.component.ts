import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detalles-partido',
  templateUrl: './detalles-partido.component.html',
  styleUrls: ['./detalles-partido.component.css']
})
export class DetallesPartidoComponent implements OnInit {

  parametro: Number;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.parametro = params.partidoId;
    })
  }



}
