export interface SessionType {
  user: {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    access: [string];
    phone: string;
    department: string;
    designation: string;
    dob: Date;
    gender: string;
    address: string;
    dateOfJoining: Date;
    workTime: number;
    jobStatus: string;
    image: string;
  };
}
