package pt.isec.a2019143183.ficha_introd.ex19.model;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LibraryList extends Library {
    private ArrayList<Book> books;

    public LibraryList(String name){
        super(name);
        books=new ArrayList<>();
    }

    List<Book> getBooks(){
        return books;
    }

    @Override
    public int addBook(Book newBook) {
//        for(Book book:books)
//            if(book.equals(newBook))
//                return -1;
        if(books.contains(newBook))
            return -1;
        books.add(newBook);
        return newBook.getId();
    }

    @Override
    public Book findBook(String title) throws CloneNotSupportedException {
        Book tempBook= new Book(title,List.of());
        int index=books.indexOf(tempBook);
        if(index>=0)
            return books.get(index).clone();
        return null;
    }

    @Override
    public String toStringSorted(){
        StringBuilder sb=new StringBuilder(String.format("Library %s: \n",getName()));
        sb.append("\nBooks:\n");
        if(books==null ||books.isEmpty())
            sb.append("The library is empty");
        else {
            List<Book> orderList=new ArrayList<>(books);
            Collections.sort(orderList);
            for(Book book:orderList)
                sb.append(String.format("- %s\n",book.toString()));
        }
        return sb.toString();
    }

}
