// imports //
window.bootstrap = require("bootstrap/dist/js/bootstrap.min.js");
import jQuery from 'jquery';
import swal from 'sweetalert';
import "bootstrap/scss/bootstrap.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/style.css';
import "./sass/index.scss";
// imports ends //
// bootstrap codes
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    ;
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();
//bootstrap codes ends
// my codes
document.querySelectorAll(".add-to-cart-btn").forEach(item => {
    item.addEventListener("click", () => {
        swal("رائع !", "لقد أضيف المنتج إلى عربة الشراء", "success", {
            buttons: ["اكمال التسوق", "الذهاب إلى عربة الشراء"],
            closeOnClickOutside: false,
        },).then(function (isConfirmed) {
            if (isConfirmed) {
                window.location = "checkout.html";
            }
        })
    })
});
//---------------------------------------------------------------------

document.querySelectorAll("[data-product-quantity]").forEach(item => {
    item.addEventListener("change", () => {
        const newQuantity = item.value;
        const parent = item.closest("[data-product-info]")
        const priceUnit = parent.getAttribute("data-product-price")
        const totalPriceForProduct = priceUnit * newQuantity;
        parent.querySelector(".total-price-for-product").innerHTML = totalPriceForProduct + "$"


        price()

    })
})

document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("[data-product-info]").remove()
        price()
    })
})

function price() {
    let totalProductsPrice = 0;
    document.querySelectorAll("[data-product-info]").forEach(i => {
        const priceUnit = i.getAttribute("data-product-price")
        const newQuantity = i.querySelector("[data-product-quantity]").value;
        totalProductsPrice += priceUnit * newQuantity
    })
    document.querySelector("#total-price-for-all-product").innerHTML = totalProductsPrice;
}

const $cities_obj = {
    sa: ["جدة", "الرياض", "مكة", "تبوك"],
    eg: ["البحيرة", "الدقهلية", "الاسكندرية", "القاهرة"],
    jo: ["الزرقاء", "عمان"],
    sy: ["الجولان", "دمشق", "حمص", "حلب"],
    lb: ["طرابلس", "بنغازي"]
}
console.log("Mahmoud is better programmer than Abdelrahman")
document.getElementsByName("country").forEach(i => {
    i.addEventListener("change", () => {
        const country = i.value;
        const cityArr = $cities_obj[country];
        let $city_select = document.querySelectorAll('select[name = "city"] option')
        $city_select.forEach(option => { option.remove() })
        const firstOption = document.createElement("option")
        const optText = document.createTextNode("اختر مدينة")
        firstOption.appendChild(optText)
        firstOption.setAttribute("value", "")
        firstOption.setAttribute("disabled", "true")
        firstOption.setAttribute("selected", "true")
        let $city_select1 = document.getElementById("paymentcities")

        $city_select1.appendChild(firstOption)

        cityArr.forEach(item => {
            const nOption = document.createElement("option")
            const text = document.createTextNode(item)
            nOption.appendChild(text)
            nOption.setAttribute("value", "")
            $city_select1.appendChild(nOption)
        })
    })
})

document.querySelectorAll("#form-checkout input[name='payment']").forEach(input => {
    input.addEventListener("change", () => {

        const payment = input.value;
        const credit_payment = document.querySelectorAll(".credit-card-info input")

        if (payment === "onDelievery")
            credit_payment.forEach(i => {
                i.style.display = "none"
            });
        else
            credit_payment.forEach(i => {
                i.style.display = "block"
            });
    })

})
function dateFunc($dateYear) {

    let $date_copyright = document.querySelector("#copyright")

    $date_copyright.innerHTML = `${$dateYear}`;
}
dateFunc(new Date().getFullYear())


// my codes ends