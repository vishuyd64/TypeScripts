var youtubeProfile = /** @class */ (function () {
    //constructor
    function youtubeProfile(_title, _channel, _published, _subscribers, _discription, _like, _dislike, _comment, _views, _share) {
        var _this = this;
        //end of constructor
        this.getTitle = function () {
            return _this.title;
        };
        this.getChannelName = function () {
            return _this.channel;
        };
        this.getPublished = function () {
            return _this.published;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.getDiscription = function () {
            return _this.discription;
        };
        this.getLike = function () {
            return _this.like;
        };
        this.getDislike = function () {
            return _this.dislike;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getShare = function () {
            return _this.share;
        };
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
    return youtubeProfile;
}());
var about = new youtubeProfile("Clash of clan || attack", "VisHuYd", "20 june 18", 823897, "clash of clan || how to distroy max th12 base", 24895, 2039, "thanks for uploading this videos,this one is really helpfull for me to distroy max base", 838992, 2134);
console.log("TITLE :" + " " + about.getTitle());
console.log("CHANNEL NAME :" + " " + about.getChannelName());
console.log("PUBLISHED ON :" + " " + about.getPublished());
console.log("SUBSCRIBERS :" + " " + about.getSubscribers());
console.log("DISCRIPTION :" + " " + about.getDiscription());
console.log("LIKE :" + " " + about.getLike());
console.log("DISLIKE :" + " " + about.getDislike());
console.log("COMMENT :" + " " + about.getComment());
console.log("VIEWS :" + " " + about.getViews());
console.log("SHARE :" + " " + about.getShare());
