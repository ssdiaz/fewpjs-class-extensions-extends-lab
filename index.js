class Polygon {

    constructor(sides) {
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(acc, side){ return acc + side }, 0)
    }
}
    // get perimeter() {
    //     if (!Array.isArray(this.sides)) return;
    //     let sum = 0;
    //     for (var int of this.sides) {
    //       sum += int
    //     }
    //     return sum
    //   }
    // }

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]

        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) ? true : false

    }
}

class Square extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]

        return ((side1 === side2) && (side3 === side4) && (side1 === side4)) ? true : false
    }

    get area(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]

        return side1 * side2
    }
}

