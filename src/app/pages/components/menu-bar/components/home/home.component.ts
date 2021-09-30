import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { ComentarioModel } from './models/comentarios.model';
import { HomeModel } from './models/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  homeList: HomeModel[] = [
    {destaque: {srcImage: "/assets/imagens/blusa.jpg", imgTitle:"Conjunto Joana", imgSubtitle:"Ideal para quem deseja renovar o armário", description: this.lorem.generateWords(50), title:"Peça em destaque"},
     designer: {autorias: 5, avaliacoes: "Muito positivas", nome:"Jennifer Arruda", srcFoto:"/assets/imagens/designer2.jfif", tempoCarreira: "10 anos"}
    },
    {destaque: {srcImage: "/assets/imagens/calca.jfif", imgTitle:"Calça Jussara", imgSubtitle:"Ideal para quem deseja renovar o armário", description: this.lorem.generateWords(50), title:"Jeans mais vendido na semana"},
     designer: {autorias: 8, avaliacoes: "Positivas", nome:"Matheus de Cunha", srcFoto:"/assets/imagens/designer1.jpg", tempoCarreira: "15 anos"}
    },
    {destaque: {srcImage: "/assets/imagens/shorts.jpg", imgTitle:"Shorts Marlene", imgSubtitle:"Ideal para quem deseja renovar o armário", description: this.lorem.generateWords(50), title:"Promoção da semana"},
     designer: {autorias: 3, avaliacoes: "Medianas", nome:"Pedro Matos", srcFoto:"/assets/imagens/designer3.jfif", tempoCarreira: "9 anos"}
    },
  ];

  comentariosList: ComentarioModel[] = [
    {nome: "adm", comentario:"Seja bem vindo!"},
    {nome: "Vanessa123", comentario: "Ótimos produtos! qualidade impecável :)"},
    {nome: "GabrielOBraboSc", comentario: "Entrega rápida, chegou antes da data!"},
    {nome: "MarianinhoGames", comentario: "Hoje levo uma peça, mas na próxima levo dez!"},
  ];

  array = [1, 2, 3, 4];
  effect = 'scrollx';

  ngOnInit(): void {
    // this.destaquesList = this.service.getDestaques;
  }

}
