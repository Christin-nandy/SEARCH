import { GithubSearchService } from './github-search.service';
import { TestBed } from '@angular/core/testing';

describe('GithubSearchService', () => {
  let service: GithubSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

