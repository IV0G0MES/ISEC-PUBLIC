package pt.isec.a2019143183.ficha_introd.ex19;

import pt.isec.a2019143183.ficha_introd.ex19.model.ILibrary;
import pt.isec.a2019143183.ficha_introd.ex19.model.LibraryList;
import pt.isec.a2019143183.ficha_introd.ex19.ui.LibraryUI;

public class MainList {
    public static void main(String[] args) throws CloneNotSupportedException {
        ILibrary library=new LibraryList("DEIS-ISEC-List");
        LibraryUI ui=new LibraryUI(library);
        ui.start();
    }
}
