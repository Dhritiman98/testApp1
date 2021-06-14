import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  constructor(private posts:PostsService) { }

  ngOnInit(): void {
  }
 
  login()
  {
this.posts.getName(this.name);
  }
}
