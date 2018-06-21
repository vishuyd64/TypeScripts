class youtubeProfile {
    public title : string
    public channel : string
    public published : string
    public subscribers : number
    public discription : string
    public like : number
    public dislike : number
    public comment : string
    public views : number
    public share : number

    //constructor
    constructor (_title:string, _channel:string, _published:string, _subscribers:number, _discription:string,
        _like:number, _dislike:number, _comment:string, _views:number, _share:number){

            this.title = _title;
            this.channel = _channel;
            this.published = _published;
            this.subscribers = _subscribers;
            this.discription = _discription;
            this.like = _like;
            this.dislike = _dislike;
            this.comment = _comment;
            this.views = _views;
            this.share = _share;
        }
        //end of constructor


        getTitle =() =>{
            return this.title;
        }
        getChannelName =() =>{
            return this.channel;
        }
        getPublished =() =>{
            return this.published;
        }
        getSubscribers =() =>{
            return this.subscribers;
        }
        getDiscription =() =>{
            return this.discription;
        }
        getLike =() =>{
            return this.like;
        }
        getDislike =() =>{
            return this.dislike;
        }
        getComment =() =>{
            return this.comment;
        }
        getViews =() =>{
            return this.views;
        }
        getShare =() =>{
            return this.share;
        }
}

let about = new youtubeProfile("Clash of clan || attack", "VisHuYd", "20 june 18", 823897, 
"clash of clan || how to distroy max th12 base", 24895, 2039, 
"thanks for uploading this videos,this one is really helpfull for me to distroy max base", 838992, 2134);

console.log("TITLE :"+" "+about.getTitle());
console.log("CHANNEL NAME :"+" "+about.getChannelName());
console.log("PUBLISHED ON :"+" "+about.getPublished());
console.log("SUBSCRIBERS :"+" "+about.getSubscribers());
console.log("DISCRIPTION :"+" "+about.getDiscription());
console.log("LIKE :"+" "+about.getLike());
console.log("DISLIKE :"+" "+about.getDislike());
console.log("COMMENT :"+" "+about.getComment());
console.log("VIEWS :"+" "+about.getViews());
console.log("SHARE :"+" "+about.getShare());

