function course(title, instructor,level, published,views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;

  this.updateViews = function() {
    return ++this.views;
  };
}

var allCourses = [
  new course("JavaScript Essentials","Avinash Shanker",1,true,0),
  new course("Node.js Essentials","Ankita Shanker",1,true,10),
]

var course01 = new course("JavaScript Essentials","Avinash Shanker",1,true,0);
var course02 = new course("Node.js Essentials","Ankita Shanker",1,true,10);
console.log(allCourses[0].updateViews());
console.log(allCourses[1].instructor);
