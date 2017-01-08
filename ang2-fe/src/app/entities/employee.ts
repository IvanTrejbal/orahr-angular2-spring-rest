export type FirstName = string;
export type LastName = string;
export type JobId = string;
export type HireDate = string;
export type JobHistoryList = string;
export type PhoneNumber = string;
export type EmployeeList = string;
export type DepartmentId = string;
export type ManagerId = string;
export type Salary = number;
export type Email = string;
export type CommissionPct = number;
export interface Employee {
  firstName?: FirstName;
  lastName?: LastName;
  jobId?: JobId;
  hireDate?: HireDate;
  jobHistoryList?: JobHistoryList;
  phoneNumber?: PhoneNumber;
  employeeList?: EmployeeList;
  departmentId?: DepartmentId;
  managerId?: ManagerId;
  salary?: Salary;
  email?: Email;
  commissionPct?: CommissionPct;
   
}