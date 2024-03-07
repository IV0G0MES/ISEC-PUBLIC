package pt.isec.a2019143183.ficha_introd.ex13;

import pt.isec.a2019143183.ficha_introd.ex13.model.ILibrary;
import pt.isec.a2019143183.ficha_introd.ex13.model.LibraryMap;
import pt.isec.a2019143183.ficha_introd.ex13.ui.LibraryUI;

public class MainMap {
    public static void main(String[] args) throws CloneNotSupportedException {
        ILibrary library=new LibraryMap("DEIS-ISEC Map");
        LibraryUI ui=new LibraryUI(library);
        ui.start();
    }
}
