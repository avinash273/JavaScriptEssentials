var course = new  Object();

var course = {
  title: "JavaScript Essential Training",
  instructor: "Avinash Shanker",
  level: 1,
  published: true,
  views: 0,

  updateViews: function() {
    return ++course.views;
  }
}

console.log(course);
