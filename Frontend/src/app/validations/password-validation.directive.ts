import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true}]
})
export class PasswordValidationDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const password = <string>control.value;
    if (!password) {return null;}
    if (password.length > 8) {return null;}

    if(password === password.toLowerCase()){return{'passwordValidation':{'message':'Debe tener mayúsculas'}}}
    if(password === password.toUpperCase()){return{'passwordValidation':{'message':'Debe tener minúsculas'}}}
    if(!/\d/.test(password)){return{'passwordValidation':{'message':'Debe tener un número'}}}

    return null;






  }

}
