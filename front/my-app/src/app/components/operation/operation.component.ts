import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {
  operations: Operation[] = []
  action: string = ''
  temoId = 0
  constructor(private operation: OperationService) {
    this.getAllOperations()
  }
  addOperation(frm: NgForm) {
    console.log(frm.value.model)
    console.log(frm.value.color)
    let temp = new Operation()

    // temp.operationId = frm.value.operationId
    temp.operationId = this.temoId++
    temp.accountNumber = frm.value.accountNumber || 1
    // temp.type = frm.value.type
    temp.type = this.action
    temp.ammount = frm.value.ammount
    temp.interest = frm.value.interest || null
    temp.payments = frm.value.payments || null
    temp.operationDate = frm.value.operationDate || null
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

