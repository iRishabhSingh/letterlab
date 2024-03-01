import java.util.*;

class Project2 {
	public static void main(String... args) {
		int[] empNo = { 1789, 1926, 1933, 1927, 1900, 1953, 1864 };
		String[] empName = { "Rishabh", "Akash", "Deepanshu", "Lavesh", "Saniya", "Sachin", "Harsh" };
		String[] designationCode = { "l", "a", "d", "r", "s", "c", "h" };
		String[] department = { "Operations", "Development", "Acct", "Front Desk", "PM", "Manufacturing", "PM" };
		int[] basic = { 80000, 40000, 18000, 21000, 50000, 23000, 39000 };
		int[] hra = { 8000, 12000, 8000, 6000, 20000, 9000, 12000 };
		int[] it = { 3000, 9000, 1000, 2000, 20000, 4400, 10000 };

		String designationCodeMean[] = { "l", "a", "d", "r", "s" };
		String designation[] = { "Engineer", "Consultant", "Clerk", "Receptionist", "Manager" };
		int da[] = { 20000, 32000, 12000, 15000, 40000 };

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter employee number : ");
		int empNumber = sc.nextInt();

		// empno,empname,department,designationofemployee,salary

		String designationOfEmployee[];
		designationOfEmployee = new String[7];
		int da_sal[];
		da_sal = new int[7];
		int salary[];
		salary = new int[7];

		for (int a = 0; a < 7; a++) {
			if (designationCode[a] == "l") {
				designationOfEmployee[a] = "Engineer";
				da_sal[a] = 20000;
			} else if (designationCode[a] == "a") {
				designationOfEmployee[a] = "Consultant";
				da_sal[a] = 32000;
			} else if (designationCode[a] == "d") {
				designationOfEmployee[a] = "Clerk";
				da_sal[a] = 12000;
			} else if (designationCode[a] == "r") {
				designationOfEmployee[a] = "Receptionist";
				da_sal[a] = 15000;
			} else if (designationCode[a] == "c") {
				designationOfEmployee[a] = "Manager";
				da_sal[a] = 40000;
			}
		}

		for (int b = 0; b < 7; b++) {
			salary[b] = basic[b] + hra[b] + da_sal[b] - it[b];
		}

		for (int i = 0; i <= 7; i++) {
			if (i == 7) {
				System.out.println("there is no employee with empid: " + empNumber);
				break;
			} else if (empNo[i] == empNumber) {
				System.out.print(empNo[i] + "  " + empName[i] + "  " + department[i] + "  " + designationOfEmployee[i]
						+ "  " + salary[i]);
				break;
			}

		}
	}
}