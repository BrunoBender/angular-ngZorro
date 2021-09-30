import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RegisterComponent),
      multi: true
    }
  ],
})
export class RegisterComponent implements OnInit {

  validateForm!: FormGroup;
  aprovacao: number;
  desaprovacao: number;
  value1 = 1;

  formatOne = (percent: number) => `${percent} Dias`;
  formatTwo = () => `Done`;


  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      datePicker: [null, [Validators.required]],

    });

    this.activatedRouter.params
    this.activatedRouter.params.subscribe(params => {
      this.aprovacao = params['aprov'];
    })
    this.buildPorcent(this.aprovacao);
  }

  buildPorcent(aprovacao : number){
    this.desaprovacao = 100 - aprovacao;
  }

}
