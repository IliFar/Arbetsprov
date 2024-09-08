package ili;

public class ProductionIdata extends BaseIdata {
    public ProductionIdata() {
        super("Production");
    }

    @Override
    public MainWork getMainWork() {
        return MainWork.PAPER;
    }
}
