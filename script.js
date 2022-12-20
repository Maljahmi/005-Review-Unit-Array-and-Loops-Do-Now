let cereals = ["Frosted Flakes", "Lucky Charms", "Cheerios", "Shreded Wheat", "Kix", "Raisin Bran", "Corn Flakes", "Trix", "Honey Nut Cheerios", "Fruit Loops", "Frosted Mini-wheats", "Chex"];
let bestCereal = cereals[10];

for (let cereal of cereals) {
    $(".list-of-cereals").append("<p>" + cereal + "</p>");
}







$(".best-of-cereals").append("<p>" + bestCereal + "</p>");