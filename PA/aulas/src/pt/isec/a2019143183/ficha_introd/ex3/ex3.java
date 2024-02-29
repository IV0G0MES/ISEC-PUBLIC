package pt.isec.a2019143183.ficha_introd.ex3;


import java.util.Scanner;

public class ex3 {
    public static void main(String[] args) {
        int nElementos,aux;
        Scanner sc=new Scanner(System.in);
        System.out.println("Qual vai ser o tamanho do array pretendido?");
        nElementos=sc.nextInt();

        int[] listaElementos=new int [nElementos];
        for(int i=0;i<nElementos;i++){
            System.out.println("Insira o inteiro que pretende colocar na lista: ");
            listaElementos[i]=sc.nextInt();
        }

        imprime(listaElementos);
        maiorMenor(listaElementos);
        System.out.println("A soma dos numero da lista é "+somaNumeros(listaElementos));
        System.out.printf("A media dos valores da lista é %.2f\n",mediaNumeros(listaElementos));
        arrayInvertido(listaElementos);
    }

    public static void imprime(int[] lista){
        for(int i=0;i<lista.length;i++){
            System.out.println("Numero "+i+" :"+lista[i]); 
        }
    }

    public static void maiorMenor(int[] lista){
        int maior=lista[0],menor=lista[0];
        for(int i=0;i<lista.length;i++){
            if(maior<lista[i]){
                maior=lista[i];
            }
            if(menor>lista[i]){
                menor=lista[i];
            }
        }
        System.out.println("O maior número da lista é o número "+maior);
        System.out.println("O menor número da lista é o número "+menor);
    }

    public static int somaNumeros(int[] lista){
        int soma=0;
        for(int i=0;i<lista.length;i++){
            soma+=lista[i];
        }
        return soma;
    }

    public static float mediaNumeros(int []lista){
        return (float)somaNumeros(lista)/lista.length;
    }
    public static void arrayInvertido(int[]lista){
        System.out.println("Array invertido:");
        for(int i= lista.length-1;i>-1;i--){
            System.out.println("Numero "+i+": "+lista[i]);
        }


    }
}










