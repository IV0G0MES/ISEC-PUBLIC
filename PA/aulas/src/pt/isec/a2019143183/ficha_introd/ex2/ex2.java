package pt.isec.a2019143183.ficha_introd.ex2;

import java.util.Scanner;

public class ex2 {
    public static void main(String args[]){
        int min=1, max=100, nr_tentativas=0,value,resposta;
        Scanner sc=new Scanner(System.in);
        System.out.println("Pense num numero entre 1 e 100.");
        do{
            value=(min+max)/2;
            nr_tentativas++;
            System.out.println("O número em que pensou foi o "+value+" ?");
            System.out.println("1-Acertou\n2-Pensei num número maior\n3-Pensei num número menor");
            System.out.print("Resposta: ");
            resposta=sc.nextInt();
            if(resposta==2){
                min=value+1;
            } else if (resposta==3) {
                max=value-1;
            }
        }while(resposta!=1&&min<=max);
        if (resposta == 1) {
            System.out.println("PENSOU NO NÚMERO: " + value + "\nADIVINHEI EM " + nr_tentativas + " TENTATIVAS");
        }
        else {
            System.out.println("O utilizador enganou-me\nNÃO FOI POSSIVEL ADIVINHAR O NUMERO");
        }
        sc.close();
    }
}


