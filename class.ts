class Emp{
  fname:any;
  lname:any;
  address1:any;
  address2:any;
  city:any;
  state:any;
  pin:any;
  phonenos:any;
  email:any;


  display():void{
      console.log(this.fname);
      console.log(this.lname);
      console.log(this.address1);
      console.log(this.address2);
      console.log(this.city);
      console.log(this.state);
      console.log(this.pin);
      console.log(this.phonenos);
      console.log(this.email);
  }
}

var emp1=new Emp();
emp1.fname='John';
emp1.lname='Doe';
emp1.address1='123 Anywhere St';
emp1.address2='Avenue 1';
emp1.city='Hyderabad';
emp1.state='TS';
emp1.pin=500081
emp1.phonenos=[9492875814,'home'],[9492877814,'work'],[9492875815,'personal'];
emp1.email=['johndoe@gmail.com','Home' ],['johnd@myoffice.com','Office' ],['doejohn@outlook.com','Personal']
emp1.display();

var emp2=new Emp(); 
emp2.fname='John';
emp2.lname='Doe';
emp2.address1='123 Anywhere St';
emp2.address2='Avenue 1';
emp2.city='Hyderabad';
emp2.state='TS';
emp2.pin=500081
emp2.phonenos=[9492875814,'home'],[9492877814,'work'],[9492875815,'personal'];
emp2.email=['johndoe@gmail.com','Home' ],['johnd@myoffice.com','Office' ],['doejohn@outlook.com','Personal']
emp2.display(); 

if(emp1.display()==emp2.display())
{
  console.log("yes both emp information is same");
}
else
{
  console.log("it is different");
}
