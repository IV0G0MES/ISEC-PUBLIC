package pt.isec.a2019143183.ficha_introd.ex19.model;

import java.util.List;

public class OldBook extends Book{
    private int nrCopies;

    public OldBook(String title, List<String> authors, int nrCopies) {
        super(title, authors);
        this.nrCopies=nrCopies;
    }

    public int getNrCopies() {
        return nrCopies;
    }

    public void setNrCopies(int nrCopies) {
        this.nrCopies = nrCopies;
    }

    @Override
    public String toString() {
        return "-Old Book" +super.toString()+", #Copies= "+nrCopies;
    }
}
