/*
 * storeProducts represents mock data of products loaded from a database
 */
let storeProducts = JSON.parse(products)

/** @function drawProductHeading
 * creates HTML heading element with text from function parameter
 *
 * @param headingText String. Text zou want to place in heading
 **/
function drawProductHeader(headingText) {
    return `<div id='${headingText}' class="productGroup">
                <h2>${headingText}</h2>
            </div>`
}

/** @function drawProductHTML
 * creates HTML element representing one product with incrementer than can be ordered and bought.
 *
 * @param productName String. Name of product that user can buy
 **/
function drawProductHTML(productName) {
    return `<h3>${productName}<h3>
            <div id="counter${productName}" class="productCounter">    
                <button class="productCounter__button productCounter--increment">+</button>
                <input class="productCounter__input" type="text" value="">
                <button class="productCounter__button productCounter--increment">-</button>
                <button class="productCounter__button productCounter--clear">smazat</button>
            </div>`
}

/** @function drawProductSummary
 * creates HTML with summary of selected products
 **/
function drawProductSummary(categoryName) {
    return `<p>Vybráno z kategorie ${categoryName}: <span id="productsTotalPressed"></span></p>`
}

// ==============================================================

let drawProductSection = ''

drawProductSection += drawProductHeader('Svícny')
drawProductSection += drawProductHTML('Svícen maly')
drawProductSection += drawProductHTML('Svícen velky')
drawProductSection += drawProductSummary('Svícny')

document.getElementById('application').innerHTML = drawProductSection
