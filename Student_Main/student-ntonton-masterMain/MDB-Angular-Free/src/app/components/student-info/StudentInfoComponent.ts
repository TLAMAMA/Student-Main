import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/components/student';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

    //constructor(private apiService: ApiService) {}
  student: student = {
    names: ' ',
    id: ' ',
    email: ' ',
    modules: [' '],
  };
  name: string;
  age: number;
  country: string;
  city: string;
  person: string;
  constructor(private apiService: ApiService) { }
  editField: string;
  personList: Array<any> = [
    { id: 1, name: ' ', age: 30, companyName: ' ', country: ' ', city: ' ' },
  ];
  awaitingPersonList: Array<any> = [
    { id: 2, name: ' ', age: 45, companyName: ' ', country: ' ', city: ' ' },
    { id: 3, name: ' ', age: 26, companyName: ' ', country: ' ', city: ' ' },
    { id: 4, name: ' ', age: 30, companyName: ' ', country: ' ', city: ' ' },
    { id: 5, name: ' ', age: 31, companyName: ' ', country: ' ', city: ' ' },
    { id: 6, name: ' ', age: 28, companyName: ' ', country: ' ', city: ' ' },
    { id: 7, name: ' ', age: 22, companyName: ' ', country: ' ', city: ' ' },
    { id: 8, name: ' ', age: 36, companyName: ' ', country: ' ', city: ' ' },
    { id: 9, name: ' ', age: 21, companyName: ' ', country: ' ', city: ' ' },
    { id: 10, name: ' ', age: 36, companyName: ' ', country: ' ', city: ' ' },
  ];
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }
  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }
  view(id: any) {
    /*if (this.awaitingPersonList.length >= 0) {
      //const person = this.awaitingPersonList[0];
      this.personList.push(this.awaitingPersonList);
      //this.awaitingPersonList.splice(0, 1);
    }*/
  }
  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(this.awaitingPersonList);
      this.awaitingPersonList.splice(0, 1);
    }
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }


  ngOnInit(): void {
  }
}
