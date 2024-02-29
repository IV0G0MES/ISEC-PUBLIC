package pt.isec.a2019143183.ex1.sum;
import pt.isec.a2019143183.ex1.integerpairs.*;
public class SumIntegerPairs
{
    public static void main(String args[])
    {	
        int i1, i2;

        System.out.println();
        
        if(args.length != 2){
            System.out.println("Specify two integer parameters!");
            return;
        }

        i1 = Integer.parseInt(args[0]);
        i2 = Integer.parseInt(args[1]);
                
        IntegerPairs p = new IntegerPairs(i1, i2);
        System.out.println(p);
        
        System.out.println(i1 + " + " + i2 + " = " + p.getSum());
    }
}