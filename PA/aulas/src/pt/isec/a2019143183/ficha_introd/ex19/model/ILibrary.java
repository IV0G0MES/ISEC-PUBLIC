package pt.isec.a2019143183.ficha_introd.ex19.model;

import java.util.List;

public interface ILibrary {
    String getName();
    void setName(String name);
    int addOldBook(String title, List<String> authors, int nrCopies);
    int addRecentBook(String title, List<String> authors,String isbn,double price);
    Book findBook(String title) throws CloneNotSupportedException;
    Book findBook(int id) throws CloneNotSupportedException;
    boolean removeBook(String title);
    boolean removeBook(int id);
    String toStringSorted();
}
