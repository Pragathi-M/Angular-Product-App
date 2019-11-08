import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  myProduct: Array<Product> = [
    {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/jkk1hu80/watch/5/m/s/ng9827pp01-fastrack-original-imaf7wy2f9zrgeqv.jpeg?q=50',
    description: 'NG9827PP01 Hip Hop Analog Watch - For Women' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1995
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/juvjzbk0/watch/n/s/w/ng38021pp10cj-fastrack-original-imaffwuqvgmhemyt.jpeg?q=50',
    description: 'NG38021PP10CJ Tees Analog Watch - For Men & Women' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 795
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/jsnjbm80/watch/p/a/n/38052sm04-fastrack-original-imafe6qhumaxww8x.jpeg?q=50',
    description: '38052SM04 Bold Fonts Analog Watch - For Men' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1700
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/jw84ya80/watch/m/u/f/ng3120sl01c-fastrack-original-imafgyqzk2rvp626.jpeg?q=50',
    description: 'NG3120SL01C Bare Basic Analog Watch - For Men' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1450
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/watch/w/d/g/3121sm01-fastrack-original-imaepzfgvuzhcx99.jpeg?q=50',
    description: '3121SM01 Analog Watch - For Men' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1650
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/jziqhzk0/watch/v/r/4/6204sl01-fastrack-original-imafjgufty7crhhe.jpeg?q=50',
    description: '6204SL01 Basics Analog Watch - For Women' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1400
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/jsdj8nk0/watch/g/p/d/ng3121sl02c-fastrack-original-imafdyh7usghdejc.jpeg?q=50',
    description: 'NG3121SL02C Bare Basic Analog Watch - For Men' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1495
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/j6mhxu80/watch/d/x/y/6123sl02-fastrack-original-imaexfh2yhrqgrde.jpeg?q=50',
    description: '6123SL02 Analog Watch - For Women' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1795
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/watch/b/a/g/3124sm01-fastrack-original-imaepwfyfx7aegae.jpeg?q=50',
    description: '3124SM01 Analog Watch - For Men' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1795
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/880/1056/jw84ya80/watch/h/z/n/ng6123sl01-fastrack-original-imafgyr7wbrskhkp.jpeg?q=50',
    description: 'NG6123SL01 Analog Watch - For Women' ,
    imageAlt: 'Unable to load',
    isAvailable: true,
    price: 1795
  }
  ];

  ngOnInit() {
  }
}

