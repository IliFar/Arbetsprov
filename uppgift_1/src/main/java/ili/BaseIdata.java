package ili;

public abstract class BaseIdata implements IIdata {
    protected String department;

    public BaseIdata(String department) {
        this.department = department;
    }

    @Override
    public String getDepartment() {
        return department;
    }

    @Override
    public abstract MainWork getMainWork();
}
