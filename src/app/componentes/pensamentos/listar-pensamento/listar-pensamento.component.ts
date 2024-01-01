import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'um pensamento',
      autoria: 'minha',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet. Quo placeat doloribus non dolorum repellat At dolorum voluptatum sit odit iure est ullam illo in quia nobis ad nisi consequatur! Aut rerum sunt eum temporibus suscipit sed enim omnis et perferendis sunt sed adipisci veritatis est alias quidem id officiis tempora. Et sunt autem ut nesciunt similique est totam excepturi. Non reiciendis iusto aut dolor omnis sed Quis voluptatum ab accusantium nobis eum dicta iure aut eveniet omnis eum maxime temporibus!',
      autoria: 'minha',
      modelo: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
