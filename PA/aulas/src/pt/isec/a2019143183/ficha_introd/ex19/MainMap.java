package pt.isec.a2019143183.ficha_introd.ex19;

import pt.isec.a2019143183.ficha_introd.ex19.model.ILibrary;
import pt.isec.a2019143183.ficha_introd.ex19.model.LibraryMap;
import pt.isec.a2019143183.ficha_introd.ex19.ui.LibraryUI;

public class MainMap {
    public static void main(String[] args) throws CloneNotSupportedException {
        ILibrary library=new LibraryMap("DEIS-ISEC Map");
        LibraryUI ui=new LibraryUI(library);
        ui.start();
    }
}
