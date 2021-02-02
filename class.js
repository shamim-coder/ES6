
class Phone {
    constructor(name, model, color, manufactureDate, Camera) {
        this.name = name,
        this.model = model,
        this.color = color,
        this.manufactureDate = manufactureDate,
        this.body = 'metal'
        this.camera = Camera;
    }
}

let phone1 = new Phone('nokia', 3310, 'red', 2008);
let phone2 = new Phone('realMe', 'A1', 'Black', 2018, true);
// console.log(phone1, phone2);




class myComputer {
    constructor() {
        this.type = 'type'
        this.processor = 'Intel'
        this.motherboard = 'Gigabyte'
        this.ram = '4 GB'
        this.price = 35000
    }
}

class Child extends myComputer {
    constructor(hdd, manufactureYear, monitor, model) {
        super()
        this.hdd = hdd
        this.manufactureYear = manufactureYear
        this.monitor = monitor
        this.model = model
    }

    getSomeInfo(){
        let phoneInfo = `
        My Pc Info: 
        01. HDD:    ${this.hdd}, 
        02. Ram:    ${this.ram}, 
        03. Model:  ${this.model}, 
        04. Monitor:  ${this.monitor}, 
        04. Manufacture Year:  ${this.manufactureYear}, 
        05. Price:  ${this.price} `
        return phoneInfo;
    }
}

let child1 = new Child('1TB', 2019, 'Samsung', 'acer')
let child2 = new Child('2TB', 2017, 'HP Full HD', 'HP')
console.log(child1.getSomeInfo());
console.log(child2.getSomeInfo());

