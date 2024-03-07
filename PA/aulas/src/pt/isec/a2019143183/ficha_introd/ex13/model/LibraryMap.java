package pt.isec.a2019143183.ficha_introd.ex13.model;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

public class LibraryMap implements ILibrary{
        private String name;
        private Map<Integer,Book> books;

        public LibraryMap(String name){
            this.name=name;
            books=new HashMap<>();
        }

        @Override
        public String getName() {
            return name;
        }

        @Override
        public void setName(String name) {
            this.name=name;
        }

        @Override
        public int addBook(String title, List<String> authors) {
            Book newBook=new Book(title,authors);
            if(books.values().contains(newBook))
                return -1;

            books.put(newBook.getId(), newBook);
            return newBook.getId();
        }

        @Override
        public Book findBook(String title) throws CloneNotSupportedException {
            for(Book book:books.values())
                if(book.getTitle().equalsIgnoreCase(title))
                    return book.clone();
            return null;
        }

        @Override
        public Book findBook(int id) throws CloneNotSupportedException {
            /*for(Book book:books.values())
                if(book.getId()==id)
                    return book.clone();
            return null;*/
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
        public String toString() {
            StringBuilder str=new StringBuilder();
            str.append(String.format("Library: %s\n",name));
            for(Book book:books.values()){
                str.append(String.format(" -%s\n",book));
            }
            return str.toString();
        }
    }
