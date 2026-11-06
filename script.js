
console.log("Welcome to CalmaxTechZone!");

alert("Welcome to CalmaxTechZone!");

// PRODUCT SEARCH FUNCTION


// PRODUCT SEARCH AND CATEGORY FILTER

let selectedCategory = "all";


function filterCategory(category) {
    selectedCategory = category;

    document.querySelectorAll(".category-filter button")
        .forEach(button => {
            button.classList.remove("active");
        });

    const activeButton = [...document.querySelectorAll(".category-filter button")]
        .find(button => button.getAttribute("onclick") === `filterCategory('${category}')`);

    if (activeButton) {
        activeButton.classList.add("active");
    }

    searchProducts();
}

}

function searchProducts() {
    const searchInput = document.getElementById("productSearch");
    const searchValue = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const productName = product.innerText.toLowerCase();
        const productCategory = product.dataset.category;

        const matchesSearch = productName.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        product.style.display =
            matchesSearch && matchesCategory ? "" : "none";
    });
}

