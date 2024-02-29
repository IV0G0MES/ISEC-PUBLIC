package pt.isec.a2019143183.ficha_introd.ex13.model;

import java.util.List;

public interface ILibrary {
    String getName();
    void setName(String name);
    int addBook(String title, List<String> authors);
    Book findBook(String title) throws CloneNotSupportedException;
    Book findBook(int id) throws CloneNotSupportedException;
    boolean removeBook(String title);
    boolean removeBook(int id);

}
