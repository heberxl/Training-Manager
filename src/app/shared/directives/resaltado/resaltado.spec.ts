import { ElementRef } from '@angular/core';
import { Resaltado } from './resaltado';

describe('Resaltado', () => {
  it('should create an instance', () => {
    const element = document.createElement('p');        // nodo HTML de prueba
    const elementRef = new ElementRef(element);         // mock de ElementRef

    const directive = new Resaltado(elementRef);        // ✅ ahora sí

    expect(directive).toBeTruthy();
  });
});
