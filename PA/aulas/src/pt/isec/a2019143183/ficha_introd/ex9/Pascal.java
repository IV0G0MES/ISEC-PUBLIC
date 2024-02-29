package pt.isec.a2019143183.ficha_introd.ex9;

public class Pascal {
    private int profundidade;
    private int [][]triangulo;
    public Pascal(int n){
        profundidade=n;
        triangulo=new int[n][n];
    }

    public void gera(){
        triangulo[0][profundidade/2]=1;
        for(int i=1;i<triangulo.length;i++){
            for(int j=0;j<triangulo[0].length;j++){
                if(j<profundidade/2)
                        triangulo[i][j] = triangulo[i - 1][j] + triangulo[i - 1][j+1];
                else{
                        triangulo[i][j] = triangulo[i - 1][j] + triangulo[i - 1][j-1];
                }
            }
        }
    }

    public void mostra(){
        for(int i=0;i<profundidade;i++){
            for(int j=0;j<profundidade;j++){
                System.out.print("  "+triangulo[i][j]+" ");
            }
            System.out.println();
        }
    }

}
