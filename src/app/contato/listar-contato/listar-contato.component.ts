import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../entidade/contato';
import { map } from 'rxjs/operators';
import { SalvarContatoComponent } from '../salvar-contato/salvar-contato.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listar-contato',
  templateUrl: './listar-contato.component.html',
  styleUrls: ['./listar-contato.component.scss'],
})
export class ListarContatoComponent implements OnInit {

  items: Observable<Contato[]>;
  contatos: Observable<Contato[]>;

  constructor(private banco: AngularFireDatabase ,private modal:ModalController) {
    this.contatos = this.banco.list<Contato>('contato').snapshotChanges().pipe(
      map(  lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val()  })  )  )
    );
  }

 async alterar(contato){
   const tela = await this.modal.create({
     component:SalvarContatoComponent,
     componentProps:{contato:contato}
   });
   tela.present();
 }




  ngOnInit() {
  }
}
