package pt.isec.a2019143183.ficha_introd.ex4;

public class Tabela {
    private static final int TAM=20;
    private int tab[];
    private int conta,tentativas;
    public Tabela(){
        tab=new int[TAM];
        conta=0;
        tentativas=0;
    }

    public boolean existe(int nr){
        for(int i=0;i<conta;i++){
            if(tab[i]==nr){
                return true;
            }
        }
        return false;
    }

    public boolean adiciona(int nr){
        tentativas++;
        if(existe(nr))
            return false;
        tab[conta++]=nr;//conta++ primeiro usa o numero atual de conta e so depois incrementa uma unidade a essa variavel
        return true;
    }

    public void geraNums(){
        conta=0;
        tentativas=0;
        while(conta<TAM){
            int nr=(int)(Math.random()*101);//Com o 101 ele gera de 0 a 100
            adiciona(nr);
        }
    }

    public void listar() {
        for(int i=0;i<TAM;i++){
            System.out.println("Numero "+i+": "+tab[i]);
        }
    }

    public void mostraNDuplicados() {
        if (conta > 0)
            System.out.println("Numero de numeros duplicados: " + (tentativas - conta));
        else
            System.out.println("Ainda não foram gerado qualquer valor");
    }
}
