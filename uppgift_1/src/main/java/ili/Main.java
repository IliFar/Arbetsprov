package ili;

public class Main {
    public static void main(String[] args) {
        IIdata production = new ProductionIdata();
        IIdata dev = new DevIdata();

        System.out.println("Production Main Work: " + convert_to_string(production.getMainWork().toString()));
        System.out.println("Production Department: " + production.getDepartment());

        System.out.println("Dev Main Work: " + convert_to_string(dev.getMainWork().toString()));
        System.out.println("Dev Department: " + dev.getDepartment());
    }

    public static String convert_to_string(String mainWork) {
        if (mainWork == null || mainWork.isEmpty()) return mainWork;

        String firstChar = mainWork.substring(0, 1);
        String lowerCase = mainWork.substring(1).toLowerCase();

        return firstChar.concat(lowerCase);
    }
}