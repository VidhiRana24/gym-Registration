import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Accountinfo } from '../accountinfo';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountserviceService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.regForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(): void {
    if (this.regForm.invalid) {
      return;
    }

    const userInfo: Accountinfo = this.regForm.value;
    this.createUserAccount(userInfo);
    this.regForm.reset();
  }

  createUserAccount(userInfo: Accountinfo): void {
    this.accountService.createaccount(userInfo).subscribe(
      () => {
        this.datasaved = true;
        this.message = 'User Created Successfully';
      },
      (error) => {
        console.error('Error creating user:', error);
        this.message = 'Failed to create user. Please try again.';
      }
    );
  }
}
