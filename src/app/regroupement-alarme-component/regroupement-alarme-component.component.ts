import { EventEmitter, OnInit, Output, Component } from "@angular/core";

@Component({
  selector: 'app-regroupement-alarme',
  template: `
             <button type="button" label="Valider" (click)="ajouterAlarme()"></button> 
  `,
})
export class RegroupementAlarmeComponent implements OnInit {

  @Output() evenement = new EventEmitter<any>();
  _ref:any;
  alarme:any = {}

  removeObject()
  {
    this._ref.destroy();
  }
  ajouterAlarme()
  {
    this.evenement.emit(this.alarme);
    this.removeObject();
  }

  constructor() { }

  ngOnInit() {
  }

}