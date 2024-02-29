package pt.isec.a2019143183.ficha_introd.ex10.model;

public class JogoEnforcadoModelo {
    private static final int MAX_ERRORS= 7;
    private static final String ESCONDIDO=".";
    private int nrTentativas,nracertos;
    private String palavra;
    private StringBuffer situacao;
    private StringBuilder usadas;

    public JogoEnforcadoModelo(){
        iniciar();
    }

    private void iniciar(){
        //TODO inclui sorteio da palavra
        //sortear a palavra
        int i=(int) (Math.random()*JogoEnforcadoDicionario.getNrPalavras());
        palavra=JogoEnforcadoDicionario.getPalavra(i);

        //criar variavel situacao com os "."
        situacao=new StringBuffer(ESCONDIDO.repeat(palavra.length()));

        usadas=new StringBuilder();
        nrTentativas=nracertos=0;
    }

    public static int getMaxErros() {
        return MAX_ERRORS;
    }

    public boolean concluido() {
        return acertou()||getNrErros()>=MAX_ERRORS;
    }

    public String getSituacao() {
        return situacao.toString();
    }

    public int getNrTentativas() {
        return nrTentativas;
    }

    public int getNrErros() {
        return nrTentativas-nracertos;
    }

    public String getPalavra() {
        return palavra;
    }

    public String getLetrasUsadas() {
        return usadas.toString();
    }

    public boolean tentaOpcao(String aposta) {
        if(concluido()||aposta.isBlank())
            return false;
        nrTentativas++;

        //foi indicada uma palavra
        if(aposta.length()>1){
            if(palavra.equalsIgnoreCase(aposta)) {
                situacao = new StringBuffer(palavra);
                nracertos++;
                return true;
            }
            return false;
        }
        //foi indicado apenas um caracter
        char op=Character.toUpperCase(aposta.charAt(0));
        usadas.append(op);
        for(int i=0;i<palavra.length();i++){
            char c=palavra.charAt(i);
            if(op==c){
                situacao.setCharAt(i,c);
                nracertos++;
                return true;
            }
        }
        return false;
    }

    public boolean acertou() {
        return palavra.equalsIgnoreCase(situacao.toString());
    }
}
