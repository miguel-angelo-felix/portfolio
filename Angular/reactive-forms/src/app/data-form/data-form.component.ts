import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formReactive: FormGroup = this.formBuilder.group({
    nome: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formReactive.value)

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formReactive.value))
    .subscribe(dados => {
      console.log(dados);
     /*  this.formReactive.reset(); */
    },
    (error: any) => {
      alert('error');
    });
    
  }

  verifyForm() {
    let inputNome = this.formReactive.get('nome');

    if(inputNome?.errors) {
      return inputNome.errors['nome'] && inputNome.touched;
    }

    return false
  }

  verifyValidTouched(input: any) {
    return !this.formReactive.get(input)?.valid && this.formReactive.get(input)?.touched;
  }

  applyError(input: any) {
    return {
      'is-invalid': this.verifyValidTouched(input)
    }
  }

}
