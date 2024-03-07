package pt.isec.a2019143183.ficha_introd.ex19.model;

import java.util.*;

public class LibraryMap extends Library{
        private Map<Integer,Book> books;

        public LibraryMap(String name){
            super(name);
            books=new HashMap<>();
        }

    Collection<Book> getBooks(){
        return books.values();
    }

        @Override
        public int addBook(Book newBook) {
            if(books.values().contains(newBook))
                return -1;

            books.put(newBook.getId(), newBook);
            return newBook.getId();
        }


        @Override
        public Book findBook(int id) throws CloneNotSupportedException {
            Book book=books.get(id);
            return book==null ? null : book.clone();
        }

        @Override
        public boolean removeBook(String title) {
            for(Book book:books.values())
                if(book.getTitle().equalsIgnoreCase(title)) {
                    books.remove(book.getId());
                    return true;
                }
            return false;
        }

        @Override
        public boolean removeBook(int id) {
            return books.remove(id)!=null;
        }

    @Override
    public String toStringSorted(){
        StringBuilder sb=new StringBuilder(String.format("Library %s: \n",getName()));
        sb.append("\nBooks:\n");
        if(books==null ||books.isEmpty())
            sb.append("The library is empty");
        else {
            List<Book> orderList=new ArrayList<>(books.values());
            orderList.sort(new BookComparatorIgnoreCase());
            for(Book book:orderList)
                sb.append(String.format("- %s\n",book.toString()));
        }
        return sb.toString();
    }
    }
