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
        "You have ordered " +
        number.val() +
        " " +
        "pizzas" +
        " " +
        flavour.html() +
        " " +
        size.html() +
        " " +
        crust.html() +
        " " +
        topping.html() +
        " " +
        " which sums up to Ksh. " +
        results +
        ". Thank you,welcome again!"
    );
    prompt("Enter your location:");
    prompt("Enter your name:");
    prompt("Enter your phone number:");
    alert("Your order will be delivered in a while, delivery charge is  Ksh. 100 ONLY.");
}

function getPick(flavour, size, crust, topping, number) {
    var results =
        (parseInt(flavour.val()) +
            parseInt(size.val()) +
            parseInt(crust.val()) +
            parseInt(topping.val())) *
        parseInt(number.val());
    alert(
        "You have in your bucket: " +
        number.val() + " pizzas, " +
        flavour.html() +
        " " +
        size.html() +
        " " +
        crust.html() +
        "  " +
        topping.html() + " . " +
        " Total at a cost of: Ksh. " +
        results +
        ". Pleasure serving you. Welcome Again!!"
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
    alert("Kindly Enter your details correctly!");
} else alert(" Hello " + Name + ", your message has been received and recorded successfully");
});
});
