package pt.isec.a2019143183.ficha_introd.ex10.ui;

import pt.isec.a2019143183.ficha_introd.ex10.model.JogoEnforcadoModelo;

import java.util.Scanner;

public class JogoEnforcadoIU {
    JogoEnforcadoModelo jogo;
    Scanner sc;
    public JogoEnforcadoIU(JogoEnforcadoModelo jogo) {
        this.jogo = jogo;
    }

    public void jogar() {
        sc = new Scanner(System.in);

        while (!jogo.concluido()) {
            System.out.println("\nSituação atual: " + jogo.getSituacao());  // mostrar as letras descobertas
            // se a palavra for CAFE
            // inicialmente deverá mostrar:  ....
            System.out.println("Nr. tentativas: " + jogo.getNrTentativas()); // inicio: 0
            System.out.printf("Erros: %d (máx.: %d)\n",jogo.getNrErros(),JogoEnforcadoModelo.getMaxErros());
            System.out.println("Caracteres já tentados: " + jogo.getLetrasUsadas());

            System.out.print("\nTentativa: ");

            String opcao = sc.nextLine().trim();

            if (opcao.length()>0)
                jogo.tentaOpcao(opcao);
        }

        if (jogo.acertou())
            System.out.printf("Parabéns! Acertou na palavra %s em %d tentativas\n",
                    jogo.getPalavra(), jogo.getNrTentativas());
        else
            System.out.println("Perdeste!!! A palavra era: "+jogo.getPalavra());
    }
}
