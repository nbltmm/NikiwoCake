document.addEventListener('DOMContentLoaded', () => {
    console.log("NikiwoCake website loaded!");

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('mouseover', () => {
            product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        product.addEventListener('mouseout', () => {
            product.style.boxShadow = 'none';
        });
    });
});
