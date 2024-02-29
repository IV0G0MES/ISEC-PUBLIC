package pt.isec.a2019143183.ficha_introd.ex13.model;


import java.util.List;
import java.util.Objects;

public class Book implements Cloneable{
    private static int count=0;

    private static int getNewId(){
        return ++count;
    }

    private int id;
    private String title;
    private List<String> authors;

    public Book(String title,List<String> authors){
        this.id=getNewId();
        this.title=title;
        this.authors=List.copyOf(authors);
    }

    public Book(String title, String... authors){
        this(title,List.of(authors));
    }

    public int getId(){
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String n){
        title=n;
    }

    public List<String> getAuthors() {
        return List.copyOf(authors);
    }

    public void setAuthors(List<String> authors){
        this.authors=List.copyOf(authors);
    }

    @Override
    public String toString(){
        String strauthors=authors.toString();//retorna "[autor,autor,autor]"
        return "["+id+"] "+title+" - "+strauthors.substring(1,strauthors.length()-1);
    }

    @Override
    public boolean equals(Object obj){
        if(this==obj)
            return true;
        if(obj==null||getClass()!=obj.getClass())
            return false;
        Book book=(Book) obj;
        return title.equalsIgnoreCase(book.title);
    }

    @Override
    public int hashCode(){
        return title.hashCode();
    }

    @Override
    protected Book clone() throws CloneNotSupportedException{
        Book newBook= (Book) super.clone();
        newBook.authors=List.copyOf(authors);
        //newBook.id=getNewId(); APENAS SE ACHARMOS QUE A RÉPLICA TEM DE TER UM NOVO ID
        return newBook;
    }
}
