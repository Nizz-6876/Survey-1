class People{
    constructor(){
        this.email=null;
        this.name=null;
        this.index=null;
        this.answer=null
    }

    updateCount(count){
        database.ref('/').update({
            peopleCount:count
        })
    }

    update(){
        database.ref("people"+this.index).set({
            name:this.name,
            email:this.email,
            answer:this.answer
        })
    }
}