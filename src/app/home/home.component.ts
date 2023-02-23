import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Welcome to the Loan Calculating Application!';

  loanForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: ['', Validators.required],
      numberOfYears: ['', Validators.required],
      interest: ['', Validators.required],
    });
  }

  get form() {
    return this.loanForm.controls;
  }

  onSubmit(event: any) {}
  calculateLoan() {
    const formValues = this.loanForm.value;
    const loanAmount = formValues.loanAmount;
    const numberOfYears = formValues.numberOfYears;
    const interest = formValues.interest;

    const monthlyPayment = 0;

    // let monthlyPayment: number = 0;
    // let totalInterest: number = 0;

    // monthlyPayment = loanAmount * (interest / (numberOfYears * 12))
  }
}
