package ili;

import static org.junit.Assert.assertEquals;
import org.junit.jupiter.api.Test;

public class UnitTest {
    @Test
    public void testConvertToString() {
        assertEquals("Digital", Main.convert_to_string("DIGITAL"));
        assertEquals("Paper", Main.convert_to_string("PAPER"));
    }

    @Test
    public void testProductionIdata() {
        IIdata production = new ProductionIdata();
        assertEquals(MainWork.PAPER, production.getMainWork());
        assertEquals("Production", production.getDepartment());
    }

    @Test
    public void testDevIdata() {
        IIdata dev = new DevIdata();
        assertEquals(MainWork.DIGITAL, dev.getMainWork());
        assertEquals("Development", dev.getDepartment());
    }
}
