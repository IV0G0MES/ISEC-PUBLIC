package pt.isec.a2019143183.ficha_introd.ex13;

import pt.isec.a2019143183.ficha_introd.ex13.model.ILibrary;
import pt.isec.a2019143183.ficha_introd.ex13.model.LibrarySet;
import pt.isec.a2019143183.ficha_introd.ex13.ui.LibraryUI;

public class MainSet {
    public static void main(String[] args) throws CloneNotSupportedException {
        ILibrary library=new LibrarySet("DEIS-ISEC-Set");
        LibraryUI ui=new LibraryUI(library);
        ui.start();
    }
}
