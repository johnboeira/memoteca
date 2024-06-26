import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.pensamentoService.selecionarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.initForm(pensamento);
    })
  }

  private initForm(pensamento: Pensamento){
    this.formulario = this.formBuilder.group({
      id: [pensamento.id],
      conteudo: [pensamento.conteudo,Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: [pensamento.autoria,Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: [pensamento.modelo],
      favorito: [pensamento.favorito],
    })
  }

  editarPensamento(): void{
    if(this.formulario.valid){
      this.pensamentoService.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao';
    }else{
      return 'botao__desabilitado'
    }
  }

}
