package Java;
/**
 * static int 
 */
class TwoOne {

    public TwoOne(int x) {
        this.x = 1000;

    }

    public TwoOne() {

    }

    public int x = 10;

    }

public class Two {

    public static void main(String[] args) {
        TwoOne three = new TwoOne(5);
        System.out.println(three.x);
    }
    
}

/**
 * Output: 1000
 * PS. The constructor defines
 * 1000 as the value to be attributed
 * to the x variale when instantiated.
 */