import { Injectable } from "@angular/core";
import { DestaqueModel } from "src/app/shared/components/destaque/models/destaque.model";
import { LoremIpsum } from "lorem-ipsum";
import { HomeModel } from "../components/menu-bar/components/home/models/home.model";
import { Observable } from "rxjs";

@Injectable()
export class HomeService{

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
    {destaque: {srcImage: "/assets/imagens/calca.jfif", imgTitle:"Calça Jussara", imgSubtitle:"Ideal para quem deseja renovar o armário", description: this.lorem.generateWords(50), title:"Jeans mais vendido na semana"},
     designer: {autorias: 5, avaliacoes: "Muito positivas", nome:"Matheus de Cunha", srcFoto:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", tempoCarreira: "10 anos"}
    },
    {destaque: {srcImage: "/assets/imagens/calca.jfif", imgTitle:"Calça Jussara", imgSubtitle:"Ideal para quem deseja renovar o armário", description: this.lorem.generateWords(50), title:"Jeans mais vendido na semana"},
     designer: {autorias: 5, avaliacoes: "Muito positivas", nome:"Matheus de Cunha", srcFoto:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", tempoCarreira: "10 anos"}
    },
    {destaque: {srcImage: "/assets/imagens/calca.jfif", imgTitle:"Calça Jussara", imgSubtitle:"Ideal para quem deseja renovar o armário", description: this.lorem.generateWords(50), title:"Jeans mais vendido na semana"},
     designer: {autorias: 5, avaliacoes: "Muito positivas", nome:"Matheus de Cunha", srcFoto:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", tempoCarreira: "10 anos"}
    },
  ];


  getDestaques(): HomeModel[]
  {
    return this.homeList;
  }
}
