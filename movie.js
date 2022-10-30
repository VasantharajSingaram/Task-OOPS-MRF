class Movie {
    constructor(name, studio, rating = "PG") {
        this.name = name;
        this.studio = studio;
        this.rating = rating;

    }
    static getPG(arr) {
        let pgArray = arr.filter((Movie) => Movie.rating == "PG");
        return pgArray;
}
}
var m1 = new Movie("Black Adam", "DC Films", "PG-13");
var m2 = new Movie("Wakanda Forever", "Marvel Studios", "PG-13");
let m3 = new Movie("Uncharted", "Columbia Pictures", "PG13");
let m4 = new Movie("DC League of Super-Pets", "Warner Animation Group");
const CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");
console.log(Movie.getPG([m1, m2, m3, m4]));
// console.log(m1, m2, m3, m4, m5);


