import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  constructor(
    private router: Router,
    private pensamentoService: PensamentoService,
    private activatedRouter : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  excluirPensamento() : void{
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if(id) {
      this.pensamentoService.excluir(parseInt(id!)).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
