class facebookProfile {
    public firstName : string
    public secondName : string
    public birthDate : number
    public birthMonth : string
    public birthYear : number
    public education : string
    public work : string
    public place : string
    public contactInfo : number
    public gender : string
    public religious : string
    public relationship : string
    public lifeEvent : string
    public sport : string
    public emailId : string

    // constructor
    constructor (_firstName:string, _secondName:string, _birthDate:number, _birthMonth:string, _birthYear:number,
    _education:string, _work:string, _place:string, _contactInfo:number, _gender:string, _religious:string,
    _relationship:string, _lifeEvent:string, _sport:string, _emailId:string ){
        
        this.firstName = _firstName;
        this.secondName = _secondName;
        this.birthDate = _birthDate;
        this.birthMonth = _birthMonth;
        this.birthYear = _birthYear;
        this.education = _education;
        this.work = _work;
        this.place = _place;
        this.contactInfo = _contactInfo;
        this.gender = _gender;
        this.religious = _religious;
        this.relationship = _relationship;
        this.lifeEvent = _lifeEvent;
        this.sport = _sport;
        this.emailId = _emailId;
    }
    //end of constructor

    getFullName =() =>{
        return this.firstName +" "+this.secondName;
    }

    getDateOfBirth =() =>{
        let age = 2018 - this.birthYear
        return this.birthDate +" "+ this.birthMonth +" "+ this.birthYear +" "+ "your age is" +" "+ age;
    }
    getEducationInfo =() =>{
        return this.education;
    }
    getWork =() =>{
        return this.work;
    }
    getPlace =() =>{
        return this.place;
    }
    getContactInfo =() =>{
        return this.contactInfo;
    }
    getGender = () =>{
        return this.gender;
    }
    getReligious = () =>{
        return this.religious;
    }
    getRelationship =() =>{
        return this.relationship;
    }
    getLifeEvent =() =>{
        return this.lifeEvent;
    }
    getSport =() =>{
        return this.sport;
    }
    getEmail =() =>{
        return this.emailId;
    }
}

let about = new facebookProfile("vishal", "kumar singh", 2, "july", 1995, "computer science and engineering", "at facebook",
 "varanasi UP", 12345667890,"male", "HINDU", "single", "goa trip", "football, cricket, chess", "vishuyd64@gmail.com");

 console.log("NAME :"+" "+ about.getFullName());
 console.log("DATE OF BIRTH :"+" "+ about.getDateOfBirth());
 console.log("EDUCATION :"+" "+ about.getEducationInfo());
 console.log("WORK :"+" "+ about.getWork());
 console.log("PLACE :"+" "+ about.getPlace());
 console.log("CONTACT NUMBER :"+" "+ about.getContactInfo());
 console.log("GENDER :"+" "+ about.getGender());
 console.log("RELIGIOUS :"+" "+ about.getReligious());
 console.log("RELATIONSHIP :"+" "+ about.getRelationship());
 console.log("LIFE EVENT :"+" "+ about.getLifeEvent());
 console.log("SPORT :"+" "+ about.getSport());
 console.log("EMAIL :"+" "+ about.getEmail());