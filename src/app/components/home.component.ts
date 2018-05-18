import { Component } from '@angular/core';


@Component({
	selector: 'home',
	templateUrl: '../views/home.html',
	styles: ['.capitalize {text-transform: capitalize;} \
				.div-main {width: 570px; margin:0 auto; border-bottom: 2px inset;} \
			.hr-st{border:none;height: 20px;width: 90%;height: 50px;margin-top: 0;border-bottom: 0px solid #1f1209;box-shadow: 0 20px 20px -20px #333;margin: -50px auto 10px;']

})

export class HomeComponent{
	public titulo:string;

	constructor(
		){
		this.titulo = "Main page"
	}


	ngOnInit(){
		console.log("se cargo component")
	}

}