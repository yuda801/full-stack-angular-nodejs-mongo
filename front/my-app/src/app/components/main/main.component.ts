import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  operations: Operation[] = []
  account: number = 2
  isAccountRegistered: boolean = false

  constructor(private operation: OperationService) {
    this.getAllOperations()
    // this.account = 1
  }

  CheckAccount(accountInputForm: NgForm) {
    this.operation.getOperations().subscribe(operationAR => this.operations = operationAR)
    this.account = accountInputForm.value.accountNumber
    console.log(this.operations)
    console.log("account is: " + this.account)
    this.operations.forEach(doc => {
      if (doc.accountNumber === this.account)
        this.isAccountRegistered = true
    });
    if (this.isAccountRegistered) this.showOperations()
  }
  getAllOperations() {
    this.operation.getOperations().subscribe(operationAR => this.operations = operationAR)
  }
  showOperations() {

  }



  ngOnInit(): void {
  }

}
