import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-detallenoti',
  templateUrl: './detallenoti.page.html',
  styleUrls: ['./detallenoti.page.scss'],
})
export class DetallenotiPage implements OnInit {

  notiDetail: any = [];

  title: string = '' ;
  date: string = '' ;
  text_small: string = '' ;
  text_long: string = '' ;
  url_imag: string = '' ;
  font_noticia: string = '' ;



  constructor(
    private router : Router,
  ) {}

  ngOnInit(){

    this.notiDetail=localStorage.getItem('detalleNoticia');
    this.notiDetail = JSON.parse(this.notiDetail);
    

    this.title = this.notiDetail.title;
    this.date = this.notiDetail.date;
    this.text_small = this.notiDetail.text_small;
    this.text_long = this.notiDetail.text_long;
    this.url_imag = this.notiDetail.url_imag;
    this.font_noticia = this.notiDetail.font_noticia;

    console.log("detalle noticia", this.notiDetail)
  }



}
