import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Repos } from '../repos';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
