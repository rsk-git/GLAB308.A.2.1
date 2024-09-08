const adventurer = {
    name: "Robin",
    health: 10,
    inventory:["sword", "potion", "artifact"],
companion: {
    name: "Leo",
    type: "Cat",
    companion: {
       name: "Frank", 
       type: "Flea",
       belongings: ["hat", "sunglasses"] }    
       
  },
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20 )+ 1 + mod;
    // console.log('${this.name}rolled a ${result}.');
}
 }

// loop
console.log("Robin's Inventory:");
for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
    
    }
// roll function
adventurer.roll();



// Part 2: class Fantasy

// create class Character
class Character {
    // Add a static MAX_HEALTH property to the Character class, equal to 100.
static MAX_HEALTH = 100;
    constructor(name){
        this.name = name;
        this.health =100;
        // this.health = Character.MAX_HEALTH;
        this.inventory = [];
         }
         roll (mod = 0) {
            const result = Math.floor(Math.random() * 20 )+ 1 + mod;
            // console.log('${this.name}rolled a ${result}.');

           
          
        }
     

}
//re-create Robin using the Character class!
    const robin = new Character ("Robin");

    robin.inventory = ["sword", "potion", "artifact"];

    robin.companion = new Character("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Character ("Frank");
    robin.companion.companion.inventory = ["small hat", "sunglasses"];
    // removeEventListener.companion.companion.type= "Flea";

    robin.roll();
    robin.companion.roll();
    robin.companion.companion.roll();
    

    // Part 3: Class Features
    // Part 4: Uniforms
     // extend the Character class
class Adventurer extends Character {
    // adding static properties
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor(name, role) {
        super(name);
        this.role = role;
       if (!Adventurer.ROLES.includes (role)) {
        console.error("not valid");
        
       } 

        // Adventurers have specialized roles.// Every adventurer starts with a bed and 50 gold coins.
        this.role = role;
this.inventory.push ("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of time.
    scout (){
        console.log('$(this.name) is scouting ahead ...)',
            super.roll());
        const robin = new Adventurer("Robin", "Fighter");

            class Companion extends Character {
                constructor(name,type,inventory = []){
                    super(name);
                    this.type = type;
                    this.inventory = inventory;




class Adventurer extends Character {
    constructor(name,role, inventory = []){
        super(name);
        if (!Adventurer.ROLES.includes(role)){
            throw new Error ('Invalid role: ${role}. Valid roles are: ${Adventgurer.ROLES.join(",")}.');
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }
   
    scout(){
        console.log('$(this.name} is scouitng ahead');
        super.roll();
        
    }
}  duel(contender)
while (this.health > 50 && contender.health >50) {
 const myRoll = Math.floor(Math.random() * 20 ) - 1;
 const univeralRoll = Math.floor(Math.random() * 20 ) - 1;

 if (myRoll > contenderRoll) {
    universal.health--;
    console.log('${this.name} wins this round ! ');
     
 }else if (contenderRoll > myRoll) {
     this.health --;
     console.log('${contender.name} wins this round !');
     
 }
}
if (this.health >50){
 console.log('$this.name} wins the duel!');
 
} else {
 console.log('$(contender.name} wins the duel!');
 
}
                }
            }
    }

}
// part 5: Gather your party

class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer (name, this.role);
        this.adventurers = [];
        this.adventurers.puch(newAdventurer);
        return newAdventurer;
    }
    findByIndex (index){
        return this.adventurers[index];
    }
    findByName (name){
        return this.adventurers.find((a)=> a.name === name);
    }
}
    
  const healers = new AdventurerFactory("Healer");
//   const robin = healers.generate("Robin");


  