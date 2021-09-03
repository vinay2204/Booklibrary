export class BookDetailsModel{
    bookName: string;
    authorName: string;
    language: string;
    published: string;
    bookcount:number;
    bookId: string;
    url:string;
    publishedDate: string;
    para: string;
    
   
    

    constructor(){
        this.bookName ='';
        this.authorName = '';
        this.language ='';
        this.bookId ='';
        this.published ='';
        this.bookcount = 0;
        this.url='';
       this.publishedDate= "";
       this.para="";
       

        }

}