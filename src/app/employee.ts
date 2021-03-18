
export class Employee {
  // tslint:disable-next-line:max-line-length
  constructor(dateOfBirth: string, firstName: string, lastName: string, gender: string, maritalStatus: string, middleName: string, nationality: string, personalDetailsId: number, ssn: string, userDetailsId: number, userPhotoPath: string){
    this.dateOfBirth = dateOfBirth;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
    this.middleName = middleName;
    this.nationality = nationality;
    this.personalDetailsId = personalDetailsId;
    this.ssn = ssn;
    this.userDetailsId = userDetailsId;
    this.userPhotoPath =  userPhotoPath;

  }
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  gender: string;
  maritalStatus: string;
  middleName: string;
  nationality: string;
  personalDetailsId: number;
  ssn: string;
  userDetailsId: number;
  userPhotoPath: string;
  }
