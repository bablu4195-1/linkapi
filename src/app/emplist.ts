export class Profiles {
  empNo: string;
  firstName: string;
  lastName: string;
  highestDegree: string;
  positionTitle: string;
  wages: string;
  status: string;

// tslint:disable-next-line:max-line-length
constructor(empNo: string, firstName: string, lastName: string, highestDegree: string, positionTitle: string, wages: string, status: string) {
  this.empNo = empNo;
  this.firstName = firstName;
  this.lastName = lastName;
  this.highestDegree = highestDegree;
  this.positionTitle = positionTitle;
  this.wages = wages;
  this.status = status;
}
}
