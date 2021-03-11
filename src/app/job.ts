export class Jobs {
// tslint:disable-next-line:max-line-length
constructor(empNo: string, firstName: string, lastName: string, highestDegree: string, positionTitle: string, status: string, wages: string){
  this.empNo = empNo;
  this.firstName = firstName;
  this.lastName = lastName;
  this.highestDegree = highestDegree;
  this.positionTitle = positionTitle;
  this.status = status;
  this.wages = wages;
}
empNo: string;
firstName: string;
lastName: string;
highestDegree: string;
positionTitle: string;
status: string;
wages: string;
}
