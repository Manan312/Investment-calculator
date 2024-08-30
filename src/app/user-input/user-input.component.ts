import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() calculate=new EventEmitter<InvestmentInput>();
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';
 constructor(private investmentService: InvestmentService){}
  getUserInvestmentData(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment,
      duration :+ this.enteredDuration,
      expectedReturn: + this.enteredExpectedReturn,
      annualInvestment: + this.enteredAnnualInvestment
    });
  }
}
