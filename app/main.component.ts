import {Component} from 'angular2/core';

@Component({
	selector:'my-app',
	template:'<h1>Sample data dileep {{valuedata}}</h1>'
})
export class AppComponent{
	this.valuedata='Mydata'
}