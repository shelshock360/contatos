import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.component.html',
  styleUrls: ['./salvar-contato.component.scss'],
})
export class SalvarContatoComponent implements OnInit {

  contato: Contato = new Contato();

  constructor(private banco: AngularFireDatabase, private modal:ModalController)  { }

  ngOnInit() { }

  salvar() {
    if (this.contato.key == null) {

      this.banco.list('contato').push(this.contato)
      this.contato= new Contato();
      alert("salvo com sucesso ")
    }else{
      this.banco.object('contato/'+this.contato.key).update(this.contato);
      this.modal.dismiss();
    }
  }

}
