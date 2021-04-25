//declaring variables
var pizzaFlavour = ["Hawaiian", "Peri-peri Chicken", "Chicken Tikka",
    "Vegetable Tikka", "Butternut Squash"];

var pizzaSize = ["Small", "Medium", "Large"];

var pizzaCrust = ["Thin crust", "Thick crust", "Gluten-free crust", "Stuffed crust"];

var pizzaTopping = ["Mushroom", "Onions", "Olives", "Bacon", "Periperi Chicken"];

//calling functions
function getFlavour() {
    var flavour = $("#pizzaflavour :selected").val();
    return parseInt(flavour);
}

function getSize() {
    var size = $("#pizzasize :selected").val();
    return parseInt(size);
}

function getCrust() {
    var crust = $("#pizzacrust :selected").val();
    return parseInt(crust);
}

function getTopping() {
    var topping = $("#pizzatopping :selected").val();
    return parseInt(topping);
}

function getNumber() {
    var number = $("#number").val();
    return parseInt(number);
}
function getAmount(flavour, size, crust, topping, number) {
    var results =
        (parseInt(flavour.val()) +
            parseInt(size.val()) +
            parseInt(crust.val()) +
            parseInt(topping.val())) *
        parseInt(number.val());
    alert(
        "You've ordered " +
        number.val() +
        " " +
        "pizza's" +
        " " +
        flavour.html() +
        " " +
        size.html() +
        " " +
        crust.html() +
        " " +
        topping.html() +
        " " +
        " which amounts to Ksh. " +
        results +
        " Thanks for your order,welcome again!"
    );
    prompt("Enter your location");
    prompt("Enter your name");
    prompt("Enter your phone number");
    alert("Your order will be delivered in a while, delivery fee is  Ksh. 200 ONLY.");
}

function getPick(flavour, size, crust, topping, number) {
    var results =
        (parseInt(flavour.val()) +
            parseInt(size.val()) +
            parseInt(crust.val()) +
            parseInt(topping.val())) *
        parseInt(number.val());
    alert(
        "Your bucket list has: " +
        number.val() +
        " " +
        " pizza's, " +
        flavour.html() +
        " " +
        size.html() +
        " " +
        crust.html() +
        "  " +
        topping.html() +
        "  " +
        " Total at a cost of:Ksh. " +
        results +
        "  It was a pleasure serving you. Welcome Again!!  "
    );
}
$(document).ready(function () {
    $("#make-delivery").click(function (event) {
        var flavour = $("#pizzaflavour :selected");
        var size = $("#pizzasize :selected");
        var crust = $("#pizzacrust :selected");
        var topping = $("#pizzatopping :selected");
        var number = $("#number");

        getAmount(flavour, size, crust, topping, number);
        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#pick-up").click(function (event) {
        var flavour = $("#pizzaflavour :selected");
        var size = $("#pizzasize :selected");
        var crust = $("#pizzacrust :selected");
        var topping = $("#pizzatopping :selected");
        var number = $("#number");
        getPick(flavour, size, crust, topping, number);
        event.preventDefault();
    });
});

//contact us
$(document).ready(function(){
    $("form").submit(function() {
        var Name = $("#Name").val();
        var Email = $("#Email").val();
        var Message = $("#Message").val(); 

if (Name == "" || Email == "" || Message == "") {
    alert("Kindly Enter the form details correctly correctly!");
} else alert(" Hello " + Name + "YOur Message Has been received and recorded successfully");
});
});
