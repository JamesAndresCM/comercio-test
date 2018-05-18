import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ComercioService } from '../services/comercio.service';
import { Comercio } from '../models/comercio';
import { MatSortable, MatTableDataSource, MatSort , MatPaginator } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
	selector: 'comercio-list',
	templateUrl: '../views/comercio-list.html',
	providers: [ComercioService],
	styles: ['.capitalize {text-transform: capitalize;} \
				.div-main {width: 570px; margin:0 auto; border-bottom: 2px inset;} \
			.hr-st{border:none;height: 20px;width: 90%;height: 50px;margin-top: 0;border-bottom: 0px solid #1f1209;box-shadow: 0 20px 20px -20px #333;margin: -50px auto 10px;']


})

export class ComercioComponent{
	public titulo:string;
	public _comercioForm: FormGroup;
	public comercios: Comercio[];
    


    //public periodo:string;
    public periodo = [
    	{value: 'ME', viewValue: 'Mensual'},
    	{value: 'DI', viewValue: 'Diario'},
    	{value: 'AN', viewValue: 'Anual'}
  	];
    public f_desde;
    public f_hasta;
    public data;

    dataSource;
    displayedColumns = ['indice','fecha','ind_act','ind_ant','ind_may','ind_men','ind_pro','ind_var'];

  	
  	applyFilter(filterValue: string) {
    	filterValue = filterValue.trim(); // Remove whitespace
    	filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    	this.dataSource.filter = filterValue;
  	}

  	@ViewChild(MatPaginator) paginator: MatPaginator;
  	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _formBuilder: FormBuilder,
        private _comercioService: ComercioService,
		){
		this.titulo = 'Selección de datos';
	}

	ngOnInit(){
		this.getComercioData();

		this._comercioForm = this._formBuilder.group({
            periodo: [this.periodo],
            f_desde: [ this.f_desde, [Validators.required]],
            f_hasta: [ this.f_hasta, [Validators.required]],
        });
	}

	getComercioData() {
	    if (this._comercioForm != null ){ 
	    		this.data = this._comercioForm.value;
	    		this._comercioForm.reset();
	    		//console.log(this.data.periodo);
        		this._comercioService.getComercioQuery(this.data.periodo,this.data.f_desde, this.data.f_hasta).subscribe(
                	response => {
                		if (response.status == 200){
	    					this.comercios = response.body.indicesItem;
	    					this.dataSource = new MatTableDataSource(this.comercios);
	    					this.dataSource.paginator = this.paginator;
	    					this.dataSource.sort = this.sort;
      					}
					},
					error => {
						console.log(<any>error);
					});
    	}
	}
}