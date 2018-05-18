import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ComercioService } from '../services/comercio.service';
import { Comercio } from '../models/comercio';
import { MatTableDataSource } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
	selector: 'grafico-list',
	templateUrl: '../views/grafico-list.html',
	providers: [ComercioService],
	styles: ['.capitalize {text-transform: capitalize;} \
				.div-main {width: 570px; margin:0 auto; border-bottom: 2px inset;} \
			.hr-st{border:none;height: 20px;width: 90%;height: 50px;margin-top: 0;border-bottom: 0px solid #1f1209;box-shadow: 0 20px 20px -20px #333;margin: -50px auto 10px;']

})

export class GraficoComponent{
	public titulo:string;
	public _graficoForm: FormGroup;
	public comercios: Comercio[];
    public f_desde;
    public f_hasta;
    public data;
    public grafico;
    public chart = [];
    datos = [];
    dataSource;
    displayedColumns = ['indice','fecha','ind_act','ind_ant'];
    public periodo = [
    	{value: 'ME', viewValue: 'Mensual'},
    	{value: 'AN', viewValue: 'Anual'}
  	];

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _formBuilder: FormBuilder,
        private _comercioService: ComercioService,
		){
		this.titulo = 'Gráficos';
	}

	ngOnInit(){
		this.getGraficoData();
		this._graficoForm = this._formBuilder.group({
            periodo: [this.periodo],
            f_desde: [ this.f_desde, [Validators.required]],
            f_hasta: [ this.f_hasta, [Validators.required]],
        });
	}
	
	
	getGraficoData() {
		
	    if (this._graficoForm != null ){ 
	    	this.data = this._graficoForm.value;
	    	this._graficoForm.reset();
	    	if(this.data.f_desde < this.data.f_hasta){
        	this._comercioService.getComercioQuery(this.data.periodo,this.data.f_desde, this.data.f_hasta).subscribe(
                response => {
                	this.datos.length = 0;
					this.parseData(response);
				},
				error => {
					console.log(<any>error);
				});
    		}else{
    			window.alert("Error : " + this.data.f_desde + " no puede ser mayor que : " + this.data.f_hasta);
    		}
    	}
	}

	parseData(json: any){
		
		for (let indice in json.body.indicesItem){
				let entry = json.body.indicesItem[indice].indice;
				if (entry.trim() == "IGPA" || entry.trim() == "IPSA" || entry.trim() == "INTER-10"){
					this.datos.push({
						key: "indice",
						value: json.body.indicesItem[indice],
				});
			}
		}
		

		for (let i in this.datos){
				let fecha = Array.of(this.datos[i].value.fecha);
				let ind_ant = Array.of(this.datos[i].value.ind_ant);
				let ind_act = Array.of(this.datos[i].value.ind_act);

				this.chart = new Chart('canvas', {
				      type: 'bar',
				      data: {
				        labels: fecha,
				        datasets: [
				          {
				          	label: "Indice Actual",
				            data: ind_act,
				            borderColor: '#3cba9f',
				            fill: true
				          },
				          {
				          	label: "Indice Anterior",
				            data: ind_ant,
				            borderColor: '#ffcc00',
				            fill: true
				          },
				        ]
				      },
				      options: {
				        legend: {
							 display: true,
								position: 'top',
								labels: {
								  boxWidth: 80,
								  fontColor: 'black'
								}
	  					},
				        scales: {
				          xAxes: [{
				            display: true
				          }],
				          yAxes: [{
				            display: true
				          }]
				        }
				      }
				    })	  
			}
			console.log(this.datos);
			this.comercios = this.datos;
			if (this.comercios.length != null ){
				this.dataSource = new MatTableDataSource(this.comercios);
			}
	}
}