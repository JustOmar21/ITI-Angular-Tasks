import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projName:string = "Outer Heaven";
  photoURL : string = "https://i.imgur.com/DFae7yy.png";
  photoHeight:string = "100";
  photoWidth:string = "100";
  textColor:string = "red";
  ApplyBlue:boolean = true;
  projDesc:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic eius quia nihil quas sit aut consequuntur modi dolore optio? Itaque, similique veniam. Modi, officia nihil! Ipsam amet ad libero.";
}
