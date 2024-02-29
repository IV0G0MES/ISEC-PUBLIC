package pt.isec.a2019143183.ficha_introd.ex5;

public class Aposta {
    private int[] numeros;
    private int numeroSorte;

    public Aposta() {
        numeros = new int[5];
        numeroSorte = 0;
    }

    public int teste(){
        return numeros.length;
    }
    public boolean preencheAposta(int numero, boolean sorte) {
        if (!apostaCompleta()) {
            if (sorte) {
                if(!numeroSorteP()) {
                    numeroSorte = numero;
                    return true;
                }
                return false;
            }
            else{
                if(!numerosP()){
                    if(procuraNumero(numero))
                        return false;
                    else{
                        numeros[numeros.length+1]=numero;
                        return true;
                    }
                }
            }
            //for (int i = 0; numero){}

        }
            return false;
    }

    public boolean procuraNumero(int n){
        for(int i=0;i<numeros.length;i++){
            if(numeros[i]==n)
                return true;
        }
        return false;
    }

    public boolean numerosP(){
        if(numeros.length==5)
            return true;
        return false;
    }

    public boolean numeroSorteP(){
        if(numeroSorte!=0)
            return true;
        return false;
    }

    public boolean apostaCompleta() {
        if (numerosP()&&numeroSorteP())
            return true;
        return false;
    }
}
