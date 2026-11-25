package CSE_29;

public class BankAccount {
	private String accountHolder;
	private double accountNumber;
	private long balance;
	
	BankAccount(String accountHolder,double accountNumber,long balance){
		this.accountHolder=accountHolder;
		this.accountNumber=accountNumber;
		this.balance=balance;
		
	}
	public String getAccountHolder() {
		return accountHolder;
		
	}
	public double getAccountNumber() {
		return accountNumber;
		
	}
	
	public long getBalance() {
		return balance;
	}
	
	public void deposit(long amount) {
		balance=balance+amount;
		System.out.println(balance);
	}
	
	public void deposit(long amount,String method) {
		balance=balance+amount;
		System.out.println("Balance: "+balance +"Method: "+method);
	}

}

