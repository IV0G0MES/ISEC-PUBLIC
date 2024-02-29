package pt.isec.a2019143183.ficha_introd.ex7;

import java.util.Arrays;

public class Matrix {
    private float values[][];
    public Matrix(int nlins,int ncols){
        values=new float[nlins][ncols];
    }

    public Matrix(Matrix other) {
        /*  OPÇÃO 1
        values=new float[other.values.length][other.values[0].length];
        for(int i=0;i<values.length;i++){
            for(int j=0;j<values[i].length;j++){
                values[i][j]=other.values[i][j];
            }
        }*/

        /*OPÇÃO 2
        values=new float[other.values.length][];
        for(int i=0;i< values.length;i++){
            values[i]=new float[other.values[i].length];
            System.arraycopy(other.values[i],0,values[i],0,other.values[i].length);
        }
        */

        //OPÇÃO 3
        values=new float[other.values.length][];
        for(int i=0;i< values.length;i++){
            values[i]= Arrays.copyOf(other.values[i],other.values[i].length);
        }


    }

    public float get(int lin, int col){
        return values[lin][col];
    }

    public boolean set(int lin,int col, float num){
        if(lin<0||lin> values.length||col<0||col>values[lin].length){
            return false;
        }
        values[lin][col]=num;
        return true;
    }

    public void show(){
        for(int i=0;i< values.length;i++){
            for(int j=0;j<values[i].length;j++){
                System.out.printf("%.2f     ",values[i][j]);
            }
            System.out.println();
        }
    }

    public void gera(){
        for(int i=0;i< values.length;i++) {
            for (int j = 0; j < values[i].length; j++) {
                set(i,j,(float)Math.random()*100);
            }
        }
    }

    public boolean add(Matrix m2){
        if(values==null||m2.values==null||values.length!=m2.values.length||values[0].length!=m2.values[0].length)
            return false;

        for(int i=0;i< values.length;i++){
            for(int j=0;j<values[i].length;j++){
                values[i][j]+=m2.values[i][j];
            }
        }
       return true;
    }

    public static Matrix add(Matrix m1, Matrix m2){
        Matrix newmatrix=new Matrix(m1);
        if(!newmatrix.add(m2))
            return null;
        return newmatrix;
    }
}
