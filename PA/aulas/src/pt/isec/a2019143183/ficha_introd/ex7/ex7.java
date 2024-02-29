package pt.isec.a2019143183.ficha_introd.ex7;

public class ex7 {
    public static void main(String[] args) {
        Matrix m1=new Matrix(4,3);
        m1.gera();
        m1.show();
        System.out.println();
        Matrix m2=new Matrix(m1);
        m2.set(1,1,1000);
        m2.show();
        System.out.println();
        m1.add(m2);
        m1.show();
        System.out.println();
        m2.show();
        Matrix m3=Matrix.add(m1,m2);
        m3.show();
    }
}
