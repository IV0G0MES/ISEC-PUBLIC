package pt.isec.a2019143183.ficha_introd.ex11.model;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Report {
    private static final int INC_AUTHORS=5;
    private String title;
    private String [] authors;
    private StringBuilder text;
    private int qtAuthors;

    public Report(String title) {
        this.title=title;
        this.text=new StringBuilder();
        this.authors=new String[INC_AUTHORS];
        this.qtAuthors=0;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text.toString();
    }

    public boolean addAuthor(String author){ //true or false se for ou nao possivel
        if(qtAuthors>=INC_AUTHORS)
            return false;
        for(int i=0;i<qtAuthors;i++){
            if(authors[i].equalsIgnoreCase(author))
                return false;
        }

        if(qtAuthors>authors.length){
            String[] newAuthors=new String[authors.length+INC_AUTHORS];
            System.arraycopy(authors,0,newAuthors,0,authors.length);
            authors=newAuthors;
        }

        authors[qtAuthors++]=author;
        return true;
    }

    public boolean removeAuthor(String author){
        for(int i=0;i<authors.length;i++){
            if(authors[i].equalsIgnoreCase(author)){

                return true;
            }
        }
        return false;
    }

    public void addText(String newText){
        if(newText!=null)
            return;
        if(text!=null)
            text=new StringBuilder(newText);
        else
            text.append(newText);
    }

    public void capitalizeSentences(){
        boolean changeNext=true;
        for(int i=0; i<text.length();i++){
            char c=text.charAt(i);
            if(changeNext&&Character.isLetter(c)){
                text.setCharAt(i,Character.toUpperCase(c));
                changeNext=false;
            }else if(".?!".indexOf(c)>=0){
                changeNext=true;
            }
        }
    }

    public int getNumberOfWords(){
        /*versão 1
        int counter=0;
        Scanner sc=new Scanner(text.toString());
        sc.useDelimiter("[\\s,.!?]+");
        while(sc.hasNext()){
            sc.next();
            counter++;
        }
        return counter;
        */

        //versão 2
        String []words=text.toString().split("[\\s,.!?]+");
        return words.length;
    }

    public int getNumberOfOccurrences(String word){
        int counter=0;
        StringTokenizer st=new StringTokenizer(text.toString(),"\t\n\r,.!?");
        while(st.hasMoreTokens()){
            if(word.equalsIgnoreCase(st.nextToken()))
                counter++;
        }
        return counter;
    }
}
