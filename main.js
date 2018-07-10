const main = document.querySelector("#content")

const etsyItems = items.results.map(function(item) {
	return `
		<div id="product">
			<a href="${unescape(item.url)}">
				<img id="overlay" src="assets/heart.png" />
				<img src="${unescape(item.Images[0].url_170x135)}" />
				<h2>${item.title}</h2>
				<h4>${item.Shop.shop_name}</h4>
				<h4>(${item.num_favorers})</h4>
				<h3>$${item.price}</h3>
				<p id="similar">See similar items +</p>
			</a>
		</div>
	`
}).join('\n')

console.log(etsyItems)

main.innerHTML = etsyItems