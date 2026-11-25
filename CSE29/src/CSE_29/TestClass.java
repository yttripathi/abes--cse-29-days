package CSE_29;

public class TestClass {
	public static void main(String[] args) {
		BankAccount bal=new BankAccount("Sumit",12345,500000);
		System.out.println(bal.getAccountHolder());
		System.out.println(bal.getAccountNumber());
		System.out.println(bal.getBalance());
		bal.deposit(10000);
		SavingAccount sa1=new SavingAccount("xyz",123,500000);
		sa1.CalculateInterest();
		
		CurrentAccount ca1=new CurrentAccount("xyz",123,500000);
		ca1.CalculateInterest();
		
		bal.deposit(10000, "Paytm");
	}
}
