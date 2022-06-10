import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-car',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class CarComponent {
  operations: Operation[] = []

  constructor(private operation: OperationService) {
    this.getAllOperations()
  }
  addOperation(frm: NgForm) {
    console.log(frm.value.model)
    console.log(frm.value.color)
    let temp = new Operation()

    temp.operationId = frm.value.operationId
    temp.accountNumber = frm.value.accountNumber
    temp.type = frm.value.type
    temp.ammount = frm.value.ammount
    temp.interest = frm.value.interest
    temp.payments = frm.value.payments
    temp.operationDate = frm.value.operationDate
    this.operation.addOperation(temp).subscribe(msg => console.log(msg))
    this.getAllOperations()
  }

  getAllOperations() {
    this.operation.getOperations().subscribe(operationAR => this.operations = operationAR)
  }

  // deleteOperation(carId: string) {
  //   this.operation.delCar(carId).subscribe(msg => console.log(msg))
  //   this.getAllOperations()
  // }
}

