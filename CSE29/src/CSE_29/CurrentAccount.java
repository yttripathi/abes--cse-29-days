package CSE_29;

public class CurrentAccount extends BankAccount{
	CurrentAccount(String accountHolder,double accountNumber,long balance){
		super(accountHolder,accountNumber,balance);
	}
	
	void CalculateInterest() {
		double interest=getBalance() * 0.08;
		System.out.println(interest);
	}
	
}
