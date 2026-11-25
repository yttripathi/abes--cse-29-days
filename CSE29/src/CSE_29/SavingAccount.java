package CSE_29;

public class SavingAccount extends BankAccount {
	SavingAccount(String accountHolder,double accountNumber,long balance){
		super(accountHolder,accountNumber,balance);
	}
	
	void CalculateInterest() {
		double interest=getBalance() * 0.05;
		System.out.println(interest);
	}
}
