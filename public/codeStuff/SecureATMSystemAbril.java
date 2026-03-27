import java.util.*;

public class SecureATMSystemAbril {

    public static void main(String[] args) {
        String passcode = "Abril1234";
        Scanner input = new Scanner(System.in);
        int attempts = 0, totalAttempts = 3, userChoice = 0;
        float userBalance = 0, depAmount = 0, withdrawAmount = 0;

        do{
            System.out.println("Enter PIN: ");
            String userPIN = input.nextLine();
            if (!Objects.equals(userPIN, passcode)) {
                attempts++;
                System.out.println("Wrong PIN, Enter Again: ");
                System.out.println("Attempts Left: " + (totalAttempts - attempts));
            }else{
                break;
            }

        }while(attempts != totalAttempts);

        if(attempts == totalAttempts){
            System.out.println("Account Locked");
            return;
        }

        do{
            do{
                System.out.println("====ATM MENU====");
                System.out.println("1) Check Balance\n2) Deposit\n3) Withdraw\n4) Exit");
                System.out.print("Your Choice: ");
                userChoice = input.nextInt();
            }while (userChoice > 4 || userChoice <= 0);

            switch (userChoice){
                case 1:
                    System.out.println("Your Balance is: " + userBalance);
                    break;
                case 2:
                    System.out.println("How much do you want to deposit?:");
                    depAmount = input.nextFloat();
                    if (depAmount == 0) {
                        System.out.println("Deposit must be Greater than 0");
                    }else{
                        userBalance += depAmount;
                        System.out.println("You've Deposited: " + depAmount + "\nNew Balance: " +userBalance);
                    }
                    depAmount = 0;
                    break;
                case 3:
                    if (userBalance == 0) {
                        System.out.println("Cannot Withdraw, Empty User Balance");
                    }else{
                        System.out.println("How much do you want to withdraw?: ");
                        withdrawAmount = input.nextFloat();
                        if (withdrawAmount > 2000) {
                            System.out.println("Cannot Withdraw, Exceeds 2,000 Limit");
                        }else if (withdrawAmount > userBalance) {
                            System.out.println("Cannot Withdraw, Exceeds User Balance: " + userBalance);
                        }else{
                            userBalance -= withdrawAmount;
                            System.out.println("You have Withdrawn: " + withdrawAmount + "\nNew Balance: " + userBalance);
                        }
                    }
                    withdrawAmount = 0;
                    break;
                case 4:
                    System.out.println("Exiting ATM....");
                    break;
                default:
                    System.out.println("Error|User Inputted: " + userChoice);
                    break;
            }
        }while (userChoice != 4);
    }
}