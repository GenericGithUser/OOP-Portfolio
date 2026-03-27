import java.util.*;

public class StudentPaymentSystemAbril {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String stuName = null, stuID = null;
        float stuTuitionFee = 0, payAmount = 0, discAmount = 0;
        int transactAmount = 0, userChoice = 0, stuType = 0;
        boolean discApplied = false;

        do{
            System.out.println("Enter Student Name: ");
            stuName = input.nextLine().trim();
        }while(stuName.isEmpty());

        do {
            System.out.println("Enter Student ID: ");
            stuID = input.nextLine().trim();
        }while (stuID.isEmpty());

        do {
            System.out.println("Enter Total Tuition Fee: ");
            while (!input.hasNextFloat()){
                System.out.println("Invalid Input, Try Again");
                input.next();
            }
            stuTuitionFee = input.nextFloat();
            input.nextLine();

        }while(stuTuitionFee <= 0);

        do {
            do {
                System.out.println("===== PAYMENT MENU =====");
                System.out.println("1)Pay Tuition\n2)Check Balance\n3)Apply Discount\n4)Exit");
                System.out.print("Your Choice: ");
                userChoice = input.nextInt();
            }while (userChoice > 4 || userChoice <= 0);
            if (stuTuitionFee == 0 && userChoice != 4) {
                userChoice = 5;
            }
            switch (userChoice){
                case 1:
                    System.out.println("Enter Payment Amount: ");
                    payAmount = input.nextFloat();

                    if (payAmount > stuTuitionFee) {
                        System.out.println("Invalid Payment");
                    }else if(payAmount <= 0){
                        System.out.println("Payment must not be 0");
                    }else{
                        stuTuitionFee -= payAmount;
                        System.out.println("You've Paid: " + payAmount + "\nCurrent Balance: " + stuTuitionFee);
                        if (stuTuitionFee == 0) {
                            System.out.println("You are now Fully Paid");
                        }
                    }
                    payAmount = 0;
                    transactAmount++;
                    break;
                case 2:
                    System.out.println("Your Balance is: " + stuTuitionFee);
                    transactAmount++;
                    break;
                case 3:
                    if (discApplied == true) {
                        System.out.println("Discount can only be applied Once");
                    }else{
                        do {
                            System.out.println("Are you:\n1)Regular Student\n2)Scholar");
                            stuType = input.nextInt();
                        }while (stuType > 2 || stuType <= 0);

                        if (stuType == 2){
                            discAmount = stuTuitionFee * 0.20f;
                            stuTuitionFee -= discAmount;
                            System.out.println("You are Eligible for 20% Discount");
                            System.out.println("The Discount is: " + discAmount + "\nNew Balance: " + stuTuitionFee);
                        }
                        else {
                            System.out.println("You are not Eligible for Discount");
                        }
                        discApplied = true;
                        transactAmount++;
                    }
                    break;
                case 4:
                    System.out.println("Final Review");
                    System.out.println("Student Name: " + stuName);
                    System.out.println("Total Transactions: " + transactAmount);
                    System.out.println("Final Balance: " + (stuTuitionFee == 0 ? "0 - Fully Paid": stuTuitionFee));
                    break;
                case 5:
                    System.out.println("Tuition Already Fully Paid");
                    userChoice = 0;
                    break;
                default:
                    System.out.println("Error|User Inputted: "+ userChoice);
                    break;
            }
        }while (userChoice != 4);

    }
}