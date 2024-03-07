package pt.isec.a2019143183.ficha_introd.ex19.model;

import java.util.List;

public class RecentBook extends Book{
    private String isbn;
    private double price;


    public RecentBook(String title, List<String> authors,String isbn, double price) {
        super(title, authors);
        this.isbn=isbn;
        this.price=price;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return String.format("-Recent Book- %s, isbn: %s, price: %.2f",super.toString(),isbn,price);
    }
}
