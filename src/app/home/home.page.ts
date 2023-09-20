import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listCategorys : any[]=[];
  listNoticias : any[]=[];

  constructor(
    public http:HttpClient,
    public route:Router
  ) { }

  ngOnInit() {

    this.http.get('../../assets/noticias/noticias_all.JSON').subscribe(data => {
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;

      
    });
  }

  Navigate(value:any){

    this.route.navigate(['detallenoti'])
    localStorage.setItem('detalleNoticia', JSON.stringify(value))



  }
  
}
