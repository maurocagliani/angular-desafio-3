import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
    userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      email: this.formBuilder.control('',[
        Validators.required, 
        Validators.email,
      ]),
      password: this.formBuilder.control('',[
        Validators.minLength(6),
      ]),
    })
  }
  get emailControl(){
    return this.userForm.controls['email'];
  }

  get emailControlIsInvalid(){
    return this.emailControl.invalid && this.emailControl.touched;
  }
  
  // Password

  
  get passwordControl(){
    return this.userForm.controls['password'];
  }

  get passwordControlIsInvalid(){
    return this.passwordControl.errors;
  }
  
 
  onSubmit(): void{

    console.log(this.userForm);
    this.userForm.controls['email'].valid;

    if (this.userForm.invalid) {
      alert('Formulario Invalido)');
  } else{
      console.log(this.userForm.value);
    }
  }
}
