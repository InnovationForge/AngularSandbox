import { Component } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Add any logic or properties specific to the header component here.

  constructor(private router: Router) {}
}
