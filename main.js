var facebookProfile = /** @class */ (function () {
    // constructor
    function facebookProfile(_firstName, _secondName, _birthDate, _birthMonth, _birthYear, _education, _work, _place, _contactInfo, _gender, _religious, _relationship, _lifeEvent, _sport, _emailId) {
        var _this = this;
        //end of constructor
        this.getFullName = function () {
            return _this.firstName + " " + _this.secondName;
        };
        this.getDateOfBirth = function () {
            var age = 2018 - _this.birthYear;
            return _this.birthDate + " " + _this.birthMonth + " " + _this.birthYear + " " + "your age is" + " " + age;
        };
        this.getEducationInfo = function () {
            return _this.education;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getPlace = function () {
            return _this.place;
        };
        this.getContactInfo = function () {
            return _this.contactInfo;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getReligious = function () {
            return _this.religious;
        };
        this.getRelationship = function () {
            return _this.relationship;
        };
        this.getLifeEvent = function () {
            return _this.lifeEvent;
        };
        this.getSport = function () {
            return _this.sport;
        };
        this.getEmail = function () {
            return _this.emailId;
        };
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
    return facebookProfile;
}());
var about = new facebookProfile("vishal", "kumar singh", 2, "july", 1995, "computer science and engineering", "at facebook", "varanasi UP", 12345667890, "male", "HINDU", "single", "goa trip", "football, cricket, chess", "vishuyd64@gmail.com");
console.log("NAME :" + " " + about.getFullName());
console.log("DATE OF BIRTH :" + " " + about.getDateOfBirth());
console.log("EDUCATION :" + " " + about.getEducationInfo());
console.log("WORK :" + " " + about.getWork());
console.log("PLACE :" + " " + about.getPlace());
console.log("CONTACT NUMBER :" + " " + about.getContactInfo());
console.log("GENDER :" + " " + about.getGender());
console.log("RELIGIOUS :" + " " + about.getReligious());
console.log("RELATIONSHIP :" + " " + about.getRelationship());
console.log("LIFE EVENT :" + " " + about.getLifeEvent());
console.log("SPORT :" + " " + about.getSport());
console.log("EMAIL :" + " " + about.getEmail());
