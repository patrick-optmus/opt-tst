import { Component } from '@angular/core';
import { DadosService } from './dados.service';
import { interval } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'opt-view';
  listaDados:any[] = [];

  formulario!:FormGroup;

  constructor(private service:DadosService,
              private formBuilder: FormBuilder){}

  ngOnInit(): void {

  this.formulario = this.formBuilder.group({
    ct:String
  })

  const contador = interval(10000);

    contador.subscribe(() =>{
      this.service.listar().subscribe((items_2 ) => {
      this.listaDados = items_2.items;
        console.log(this.listaDados);
      });
    });



  }
}
