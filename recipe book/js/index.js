var container = document.querySelector(".container");
var searchRecipe = document.querySelector(".search-recipe");
var search = document.querySelector(".search");

var dataEl = []
var dataName = []
var dataStructure = []
var dataLinkRecipe = []

search.addEventListener("click", function(){
	container.innerHTML = ""
	var paramSearch = searchRecipe.value



	var link = "https://api.edamam.com/search?q="
	var apiId = "&app_id=21d9cb4d&app_key="
	var apiKey = "8879d904ad64205577f4e4b84a1d63d2"

	var query = link + paramSearch + apiId + apiKey


	$.getJSON(query, function (data){
		console.log(data)
		for(var i = 0; i < data["hits"].length; i++){
/*			console.log(data)*/
			var blockRecipe = document.createElement("div")
			blockRecipe.classList.add("block-recipe")
			container.appendChild(blockRecipe)
			var nameRecipe = document.createElement("div")
			nameRecipe.classList.add("recipe-name")
			blockRecipe.appendChild(nameRecipe)
			nameRecipe.innerHTML = data["hits"][i]["recipe"]["label"]
			dataName.push(nameRecipe.innerHTML)
			var imageRecipe = document.createElement("img")
			imageRecipe.classList.add("recipe-image")
			imageRecipe.setAttribute("src", data["hits"][i]["recipe"]["image"])
			imageRecipe.setAttribute("count", i)
			blockRecipe.appendChild(imageRecipe)
			dataEl.push(imageRecipe)
			var blockRecipeStructure = document.createElement("div")
			blockRecipeStructure.classList.add("recipe-structure")
			dataLinkRecipe.push(data["hits"][i]["recipe"]["url"])
			blockRecipe.appendChild(blockRecipeStructure)
			for(var j = 0; j < data["hits"][i]["recipe"]["ingredientLines"].length; j++){
				var lineIngredient = document.createElement("div")
				lineIngredient.classList.add("recipe-ingredient")
				blockRecipeStructure.appendChild(lineIngredient)
				lineIngredient.innerHTML = data["hits"][i]["recipe"]["ingredientLines"][j]
			}

				imageRecipe.addEventListener("click", function(){
					console.log(dataLinkRecipe)
						var elTarget = event.target
						var countEl = elTarget.getAttribute("count")
						var imageEl = elTarget.getAttribute("src")
						howToCook = document.createElement("div")
						howToCook.classList.add("how-to-cook")
						container.appendChild(howToCook)
						var exit = document.createElement("div")
						exit.classList.add("exit")
						howToCook.appendChild(exit)
						exit.innerHTML = "&#10006;"
						howToCookName = document.createElement("div")
						howToCookName.classList.add("how-to-cook-name")
						howToCook.appendChild(howToCookName)
						howToCookName.innerHTML = dataName[countEl]
						howToCookImage = document.createElement("img")
						howToCookImage.classList.add("how-to-cook-image")
						howToCook.appendChild(howToCookImage)
						howToCookImage.setAttribute("src", imageEl)
						howToCookStructure = document.createElement("div")
						howToCookStructure.classList.add("how-to-cook-structure")
						howToCook.appendChild(howToCookStructure)
						howToCookText = document.createElement("div")
						howToCookText.classList.add("how-to-cook-text")
						howToCook.appendChild(howToCookText)
						link = document.createElement("a")
						link.innerHTML = "Перейти на сайт с рецептом"
						link.classList.add("link")
						howToCookText.appendChild(link)
						link.setAttribute("href", dataLinkRecipe[countEl])
						
/*						howToCookText.innerHTML = dataLinkRecipe[countEl]
						
			*/
						/*	console.log(dataLinkRecipe[countEl])*/
						for(var j = 0; j < data["hits"][countEl]["recipe"]["ingredientLines"].length; j++){
							var lineHowToCookStructure = document.createElement("div")
							lineHowToCookStructure.classList.add("line-how-to-cook-structure")
							howToCookStructure.appendChild(lineHowToCookStructure)
							console.log(data["hits"][countEl]["recipe"]["ingredientLines"][j])	
							dataStructure.push(data["hits"][countEl]["recipe"]["ingredientLines"][j])
							console.log(dataStructure[j])
							lineHowToCookStructure.innerHTML = data["hits"][countEl]["recipe"]["ingredientLines"][j]
						}
						exit.addEventListener("click", function(){
								howToCook.innerHTML = ""
						})
				})
		}
	})
})
