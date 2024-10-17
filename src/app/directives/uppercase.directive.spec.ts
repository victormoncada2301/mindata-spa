import { UppercaseDirective } from './uppercase.directive';
import { ElementRef } from '@angular/core';

describe('UppercaseDirective', () => {
  let elementRef: ElementRef;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('input'));
  });

  it('should create an instance', () => {
    const directive = new UppercaseDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
