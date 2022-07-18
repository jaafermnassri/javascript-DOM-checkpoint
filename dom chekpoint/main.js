function functlike() {

    document.getElementById("likeone").style.color= "#ff3333";
}
function functlikee() {

    document.getElementById("liketwo").style.color= "#ff3333";
}

// change the quantity of products

function plus() {
(document.getElementById('qty').value = parseInt(document.getElementById('qty').value  )+ 1);
document.getElementById('priceone').value=document.getElementById('qty').value*59;

// (document.getElementById('priceone').value = parseInt(document.getElementById('priceone').value)*document.getElementById('qty').value);
// document.getElementById('priceone').value = parseInt(document.getElementById('priceone').value)+parseInt(document.getElementById('priceone').value);
}
function minus()  {
    document.getElementById('qty').value = parseInt(document.getElementById('qty').value  )- 1;
    document.getElementById('priceone').value=document.getElementById('qty').value*59;
    // (document.getElementById('priceone').value = parseInt(document.getElementById('priceone').value)*document.getElementById('qty').value);
}

function plustwo() {
    document.getElementById('qtytwo').value = parseInt(document.getElementById('qtytwo').value  )+ 1;
    document.getElementById('pricetwo').value=document.getElementById('qtytwo').value*39;
    }
function minustwo()  {
        document.getElementById('qtytwo').value = parseInt(document.getElementById('qtytwo').value  )- 1;
        document.getElementById('pricetwo').value=document.getElementById('qtytwo').value*39;
}

// remove the items from buy list

function remove() {
    document.getElementById('itmone').style.display="none";
}
function removee() {
    document.getElementById('itmtwo').style.display="none";
}

// total price
function total() {
    document.getElementById('tot').value = parseInt(document.getElementById('priceone').value)+parseInt(document.getElementById('pricetwo').value); 
}