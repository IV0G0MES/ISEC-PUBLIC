package pt.isec.a2019143183.ficha_introd.ex10;

import pt.isec.a2019143183.ficha_introd.ex10.model.JogoEnforcadoModelo;
import pt.isec.a2019143183.ficha_introd.ex10.ui.JogoEnforcadoIU;


public class JogoEnforcado {
    public static void main(String[] args) {
        JogoEnforcadoModelo jogo = new JogoEnforcadoModelo();
        JogoEnforcadoIU jogoIU = new JogoEnforcadoIU(jogo);
        jogoIU.jogar();
    }
}
