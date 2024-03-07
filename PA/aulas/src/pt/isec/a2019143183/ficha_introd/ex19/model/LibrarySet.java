package pt.isec.a2019143183.ficha_introd.ex19.model;


import java.util.*;

public class LibrarySet extends Library {
    private Set<Book> books;

    public LibrarySet(String name){
        super(name);
        books=new HashSet<>();
    }

    Collection<Book> getBooks(){
        return books;
    }

    @Override
    public int addBook(Book newBook) {
        if(!books.add(newBook))
            return -1;
        return newBook.getId();
    }

    @Override
    public Book findBook(String title) throws CloneNotSupportedException {
        for(Book book:books)
            if(book.getTitle().equalsIgnoreCase(title))
                return book.clone();
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
            Collections.sort(orderList,new BookComparator());
            for(Book book:orderList)
                sb.append(String.format("- %s\n",book.toString()));
        }
        return sb.toString();
    }
}
