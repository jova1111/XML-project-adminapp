import { TestBed, inject } from '@angular/core/testing';

import { ApprovedCommentService } from './approved-comment.service';

describe('ApprovedCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApprovedCommentService]
    });
  });

  it('should be created', inject([ApprovedCommentService], (service: ApprovedCommentService) => {
    expect(service).toBeTruthy();
  }));
});
