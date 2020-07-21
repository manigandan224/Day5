const userone={
    name:'mani',
    age:20,
    email:'manivijay27052000@gmail.com',
};
class user{
  constructor(name,age,email,courses){
      this.name=name;
      this.age=age;
      this.email=email;
      this.coins=0;
      this.courses=[];
  }
  login(){
      console.log(`${this.name} has logged in`);
  }
  logout(){
      console.log(`${this.name} has logged out`);
  }
    
}
class Moderator extends user{
    addcoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
    }
    removecoins(){
         this.coins--;
         console.log(`${this.name} has ${this.coins} coins`);
    } 
}
class Admin extends Moderator{
    addCourse(user,course){
         user.courses.push(course);
         console.log(user);
    }
     deleteCourse(course){
         users=users.filter(u=>{
             return u.courses!=course;
         })
     }
}
let user1=new user('mani',27,'manivijay27052000@gmail.com');
let mod=new Moderator('uday',18,'uday21@gmail.com');
let admin=new Admin('jagan',15,'ja@gmail.com');
user1.login();
mod.addcoins();
mod.removecoins();
admin.addCourse(mod,'javascript');
admin.addCourse(user1,'javascript');
admin.addCourse(admin,'php');
let users=[user1,mod,admin];


 admin.deleteCourse('javascript');
 console.log(users);
