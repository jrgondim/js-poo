export class Cars {
    static carId = 0;
    licence_plate;
    brand;
    model;
    category;
    color;
    price_day;
    amount;
    isavailable;
    

    constructor(licence_plate, brand, model, category, color, price_day, isavailable){
        
        this.licence_plate = licence_plate;
        this.brand = brand;
        this.model = model;
        this.category = category;
        this.color = color;
        this.price_day = price_day;
        this.isavailable = isavailable;
        Cars.carId += 1;
    }

    rent(days){
        if (this.isavailable == "S") {
            console.log("testando disponivel: " , this.isavailable)
            this.amount = this.price_day * days;
            console.log("Locacao ok!");
            // saindo da disponibilidade
           

            
  
        } else {
            console.log("O veículo não está disponível");
        }
    }
    
    unableCar(){
        
    }
}