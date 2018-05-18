import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpRequest, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Comercio } from '../models/comercio';
import { GLOBAL } from './global';
 

@Injectable()
export class ComercioService{

	public url:string;

	constructor(public _http: HttpClient){
		this.url = GLOBAL.url;
	}

	getComercioQuery(periodo:string, f_desde:string, f_hasta:string): Observable<any>{
		return this._http.get(this.url+'consultaIndices?periodo='+periodo+'&f_desde='+f_desde+'&f_hasta='+f_hasta, { observe: 'response'});
	}

}