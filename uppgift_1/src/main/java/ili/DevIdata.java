package ili;

public class DevIdata extends BaseIdata {
    public DevIdata() {
        super("Development");
    }

    @Override
    public MainWork getMainWork() {
        return MainWork.DIGITAL;
    }
}
