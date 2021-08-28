
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


//if we change product count without pressing increasing or decreasing button
document.getElementById('phone-count').addEventListener('change', function (event) {
    updateProductTotal('phone', 1219, parseInt(event.target.value));
});
document.getElementById('case-count').addEventListener('change', function (event) {
    updateProductTotal('case', 59, parseInt(event.target.value));
});

//close button function
function phoneClose() {
    document.getElementById('phone').style.display = 'none';
}
function caseClose() {
    document.getElementById('case').style.display = 'none';
}

//add to cart event handler
document.getElementById('add-to-cart').addEventListener('click', function () {

    const phoneCount = document.getElementById('phone-count').value
    const caseCount = document.getElementById('case-count').value
    const phonePrice = document.getElementById('phone-total').innerText
    const casePrice = document.getElementById('case-total').innerText

    const subTotal = document.getElementById('sub-total').innerText
    const tax = document.getElementById('tax-amnt').innerText
    const total = document.getElementById('total').innerText
    document.getElementById('product-list').textContent = '';

    if (parseInt(phoneCount) > 0) {

        const phone = document.createElement('li');
        phone.innerText = 'iPhone 11 128GB Black ' + phoneCount + ' pcs price ' + phonePrice;
        document.getElementById('product-list').appendChild(phone);

    }
    if (parseInt(caseCount) > 0) {
        const phoneCase = document.createElement('li');
        phoneCase.innerText = 'iPhone 11 Silicone Case - Black ' + caseCount + ' pcs price ' + casePrice;
        document.getElementById('product-list').appendChild(phoneCase);
    }
    if (parseInt(phoneCount) > 0 || parseInt(caseCount) > 0) {

        document.getElementById('cart-subTotal').innerText = 'Sub-total = ' + subTotal
        document.getElementById('cart-tax').innerText = 'Tax = ' + tax
        document.getElementById('cart-total').innerText = 'Total = ' + total
        document.getElementById('check-out').removeAttribute('disabled')
    }
})

