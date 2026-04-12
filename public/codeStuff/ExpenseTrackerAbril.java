import java.util.*;

public class ExpenseTrackerAbril {
    static Scanner input = new Scanner(System.in);

    public static void displayTitle() {
        System.out.println("=======================");
        System.out.println("=== EXPENSE TRACKER ===");
        System.out.println("=======================");
    }

    public static String checkIfOverBudget(float totalExpenses, float budget, boolean checkRemainBudget){
        float remainBudget = budget - totalExpenses;

        if (budget == 0 && totalExpenses == 0f) {
            return "No Budget and Expenses Added";
        }else {
            if (checkRemainBudget) {
                return "The Remaining Budget is " + remainBudget;
            }else{
                if (remainBudget <= 0) {
                    return "You have Overrun your Budget, You are at a deficit of " + remainBudget;
                }else{
                    return "Your Budget is Fine";
                }
            }

        }

    }

    public static void displayExpenses(String[] expenseType, int size, float[] expenses, float totalExpense, float budget, boolean checkRemainBudget){
        System.out.println("== Expenses ==");
        if (expenses[0] == 0f && expenses[1] == 0f && expenses[2] == 0f) {
            System.out.println("There is no expenses to display");
        }else {
            for (int i = 0; i < size; i++) {
                System.out.println(expenseType[i] + ": " + expenses[i]);
            }
            System.out.println("Total Expenses: " + totalExpense);
            System.out.println("Budget Status: " + checkIfOverBudget(totalExpense, budget, checkRemainBudget));
        }
    }

    public static float addOrDisplayBudget(float budget, boolean[] hasBudget){
        String userChoice = "";
        System.out.println("== ADD BUDGET ==");
        System.out.println("Current Budget: " + budget);
        while (!Objects.equals(userChoice, "n")){
            System.out.print("Add How Much?: ");
            budget += input.nextFloat();
            input.nextLine();

            System.out.println("New Budget: " + budget);
            userChoice = "";

            while (!userChoice.equalsIgnoreCase("y") && !userChoice.equalsIgnoreCase("n") ){
                System.out.print("Add More?: ");
                userChoice = input.nextLine();
            }
            if (userChoice.equalsIgnoreCase("n")) {
                break;
            }

        }
        if (!hasBudget[0] && budget > 0){
            hasBudget[0] = true;
        }
        return budget;
    }

    public static int addExpenseType(String[] expenseType, int size){
        String expenseName = "";
        System.out.println("== Add Another Expense ==");
        while (expenseName.isEmpty()){
            System.out.print("Expense Name: ");
            expenseName = input.nextLine();
        }
        expenseType[size] = expenseName;


        System.out.println("Added " + expenseType[size] + " Expense");
        size++;
        System.out.println("Add its value on using the Second option!");


        return size;
    }

    public static float addAndComputeExpense(String[] expenseType, int size, float[] expenses, float totalExpense, boolean[] hasBudget){
        System.out.println("== Add and Compute Expense ==");
        String userChoice = "";

        if (!hasBudget[0]) {
            System.out.println("No Budget Yet, add some first!");
            return totalExpense;
        }else{
            if (size > 3){
               while (userChoice.isEmpty() && !userChoice.equals("y") && !userChoice.equals("n")){
                   System.out.print("Do you want to Modify latest addition or all?[Y/N]: ");
                   userChoice = input.nextLine();
               }
               if (userChoice.equalsIgnoreCase("y")){
                   for (int i = size-1; i < size ; i++) {
                       System.out.println("Add Expense for " + expenseType[i]);
                       System.out.print(expenseType[i] + ": ");
                       expenses[i] += input.nextFloat();
                       input.nextLine();
                       totalExpense += expenses[i];

                       System.out.println("Total Expense: " + totalExpense);
                   }

               } else if (userChoice.equalsIgnoreCase("n")) {
                   for (int i = 0; i < size ; i++) {
                       System.out.println("Add Expense for " + expenseType[i]);
                       System.out.print(expenseType[i] + ": ");
                       expenses[i] += input.nextFloat();
                       totalExpense += expenses[i];

                   }
                   System.out.println("Total Expenses: " + totalExpense);
               }

            }else{
                for (int i = 0; i < size ; i++) {
                    System.out.println("Add Expense for " + expenseType[i]);
                    System.out.print(expenseType[i] + ": ");
                    expenses[i] += input.nextFloat();
                    totalExpense += expenses[i];

                }
                System.out.println("Total Expenses: " + totalExpense);
            }
        }
        return totalExpense;
    }



    public static void main(String[] args) {
        String[] expenseType = new String[20];
        int size = 3, userChoice = 0;
        float budget = 0, totalExpenses = 0;
        String[] initialExpenseTypes = {"Food", "Transportation", "Other Expenses"};
        System.arraycopy(initialExpenseTypes, 0, expenseType, 0, initialExpenseTypes.length);
        float[] expenses = new float[20];
        boolean[] hasBudget = {false};
        boolean checkRemainBudget = false;

        displayTitle();

        while (userChoice <= 0 || userChoice > 6){
            System.out.println("What do you want to do?");
            System.out.println("1) Display/Add Budget\n2) Add and Calculate Expenses\n3) Display Expenses\n4) Add Expense Category\n5) Compute for Remaining Budget\n6) Exit");
            System.out.print("Choice:");
            userChoice = input.nextInt();
            input.nextLine();

            switch (userChoice){
                case 1:
                    budget = addOrDisplayBudget(budget, hasBudget);
                    userChoice = 0;
                    break;
                case 2:
                    totalExpenses = addAndComputeExpense(expenseType, size, expenses, totalExpenses, hasBudget);
                    userChoice = 0;
                    break;
                case 3:
                    displayExpenses(expenseType, size, expenses, totalExpenses, budget, checkRemainBudget);
                    userChoice = 0;
                    break;
                case 4:
                    size = addExpenseType(expenseType, size);
                    userChoice = 0;
                    break;
                case 5:
                    checkRemainBudget = true;
                    System.out.println(checkIfOverBudget(totalExpenses, budget, checkRemainBudget));
                    checkRemainBudget = false;
                    userChoice = 0;
                    break;
                case 6:
                    System.out.println("Exiting....");
                    return;
                default:
                    continue;


            }

        }

    }
}