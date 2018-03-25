import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Gif } from '../gif'


@Component({
  selector: 'app-gifapi',
  templateUrl: './gifapi.component.html',
  styleUrls: ['./gifapi.component.css'],
  
  
})
export class GifapiComponent implements OnInit {
  gifimage: Gif;

  constructor( private http:HttpClient) { 
    
  }

  ngOnInit() {
    interface ApiResponse{
      repos_url:any;
      login:string;
      avatar_url:any;
    
    }
    this.http.get<ApiResponse>("https://api.github.com/users/Kiptim54?access_token=fbd28b3d6df1df30788f906bf66c0d8d7faf1be8").subscribe(data=>{
        this.gifimage = new Gif(data.repos_url, data.login, data.avatar_url);
    })
  }

}
