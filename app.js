
//if clicked on the increase or decreasing button updates the product count
function updateProductCount(product, price, isIncreased) {
    const productCountInputText = document.getElementById(product + '-count');
    let productCountInputNumber = parseInt(productCountInputText.value);
    if (isIncreased) {
        productCountInputNumber += 1;
    }
    else if (productCountInputNumber > 0) {
        productCountInputNumber -= 1;
    }
    productCountInputText.value = productCountInputNumber;


    updateProductTotal(product, price, productCountInputNumber)

}

//function for updating the individual product total price according to the product count
function updateProductTotal(product, price, productCountInputNumber) {
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = price * productCountInputNumber;
    calculateTotal();
}

//function for calculating the whole shopping total
function calculateTotal() {
    const phoneTotal = parseInt(document.getElementById('phone-count').value) * 1219;
    const caseTotal = parseInt(document.getElementById('case-count').value) * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amnt').innerText = tax;
    document.getElementById('total').innerText = total;


}


//phone plus button event handler
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductCount('phone', 1219, true)
});
//phone minus button event handler
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductCount('phone', 1219, false);

});
//case plus button event handler
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductCount('case', 59, true)
});
//case minus button event handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductCount('case', 59, false);

});


//if we paste or type product count
document.getElementById('phone-count').addEventListener('change', function (event) {
    updateProductTotal('phone', 1219, parseInt(event.target.value));
});
document.getElementById('case-count').addEventListener('change', function (event) {
    updateProductTotal('case', 59, parseInt(event.target.value));
});

