import { TestBed } from '@angular/core/testing';

import { SkillsScriptService } from './skills-script.service';

describe('SkillsScriptService', () => {
  let service: SkillsScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
