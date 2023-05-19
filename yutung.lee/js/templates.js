// debug for me:
// const listItemTemplate = templater(o=>`
// <a class="col-xs-12 col-md-4" href="mainproduct_item.php?id=${o.id}">
//     <figure class="figure product display-flex flex-column">
//         <div class="flex-stretch">
//         <img src="img/${o.thumbnail}" alt="">
//         </div>
//         <figcaption class="flex-none">
//             <div>&dollar;${o.price}</div>
//             <div>${o.name}</div>
//         </figcaption>
//     </figure>
// </a>
// `);

// const listItemTemplate = templater(o => `
// <a class="col-xs-12 col-md-4" href="mainproduct_item.php?id=${o.id}">
//     <figure class="figure product display-flex flex-column">
//         <div class="flex-stretch">
//             <img src="img/${o.thumbnail}" alt="">
//         </div>
//         <figcaption class="flex-none">
//             <div>&dollar;${o.price}</div>
//             <div>${o.name}</div>
//         </figcaption>
//     </figure>
// </a>
// `);


const listItemTemplate = templater(o=>`
<a class="col-xs-12 col-md-4" href="web_product_item.php?id=${o.id}">
    <figure class="figure product display flex flex-column">
        <div class="flex-stretch">
        <img src="img/${o.thumbnail}" alt="" > 
        </div>
        
        
        <figcaption class="flex-none">
            <div>&dollar;${parseFloat(o.price).toFixed(2)}</div>
            <div>${o.name}</div>            
        </figcaption>
    </figure>
</a>
`);
