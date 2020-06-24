import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Repos } from '../repos';
import { Users } from '../users';
import { GithubSearchService} from '../github-search-service/github-search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [GithubSearchService]
})
export class ProfileComponent implements OnInit {
  user: Users;
  repos: Repos;
  userRepos: any;
  userName: string;


  constructor(private githubSearchService: GithubSearchService) {
  }
 findName() {

   this.githubSearchService.updateProfile(this.userName);

   this.githubSearchService.getUserInfo();
   this.user = this.githubSearchService.user;
   console.log(this.user);

   this.githubSearchService.getRepoInfo(this.userName);
   this.userRepos = this.githubSearchService.newRepo;
 }

  ngOnInit() {

    this.githubSearchService.getRepoInfo(this.userName);
    this.repos = this.githubSearchService.repo;
    this.githubSearchService.getUserInfo();
    this.user = this.githubSearchService.user;

  }

}