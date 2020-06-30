class Form {
  constructor() {
    this.title=createElement('h2') 
    this.name=createInput("Name");
    this.email=createInput("E-mail")
    this.button=createButton('Submit');
    this.Q1=createElement('h3');
    this.radio1=createRadio('h3')
    this.radio1.option('yes');
    this.radio1.option('no');
    this.Q2=createElement('h3');
    this.radio2=createRadio('h3')
    this.radio2.option('yes');
    this.radio2.option('no');
    this.Q3=createElement('h3');
    this.radio3=createRadio('h3')
    this.radio3.option('100');
    this.radio3.option('500');
    this.radio3.option('1000');
    this.radio3.option('more');
  }

  display(){
    
    this.title.html("Survey to bring change");
    this.title.position(250, 5);
    
    this.Q1.html("Q1.Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
    this.Q1.position(100,50);
    this.radio1.position(100,100);

    this.Q2.html("Q2. Would you be willing to contribute a small amount every month for such a program?")
    this.Q2.position(100,200);
    this.radio2.position(100,250);

    this.Q3.html("Q3. How much per month would you be willing to pay?")
    this.Q3.position(100,350);
    this.radio3.position(100,400);

    this.name.position(130, 500);
    this.email.position(130,550);
    this.button.position(250,580);


    this.button.mousePressed(()=>{
     
      var answers=[]
      var name = this.name.value();
      var email =this.email.value();
      var answer1= this.radio1.value();
      var answer2= this.radio2.value();
      var answer3= this.radio3.value();
      
      answers.push(answer1,answer2,answer3);
      people.answer=answers
      people.name=name;
      people.email=email;
      peopleCount=peopleCount+1;
      people.index=peopleCount;

      people.updateCount(peopleCount);
      people.update();

    
    });

  }

  hide(){
    this.title.hide();
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }
}
