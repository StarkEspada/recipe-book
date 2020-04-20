var container = document.querySelector(".container");
var searchRecipe = document.querySelector(".search-recipe");
var search = document.querySelector(".search");

var dataId = []
var dataName = []
var dataIngredient = []
var dataIngredientFilter = []
var dataInstruction = []
var datalineHowCook = []
var number = -1


search.addEventListener("click", function(){
	dataId = []
	dataIngredient = []
	container.innerHTML = ""
	var paramSearch = searchRecipe.value

	var link = "https://www.themealdb.com/api/json/v1/1/filter.php?i="
	var query = link + paramSearch

	$.getJSON(query, function (data){

/*		console.log(data)*/
		for(var i = 0; i < data["meals"].length; i++){
			var id = data["meals"][i]["idMeal"]
			dataId.push(id)
		}

	var linkRecipe = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

	for(var i = 0; i < dataId.length; i++){
		var queryRecipe = linkRecipe + dataId[i]

		$.getJSON(queryRecipe, function (data){
			for(var j = 0; j < data["meals"].length; j++){
				dataInstruction.push(data["meals"][j]["strInstructions"])
				number++
				console.log(data["meals"][j])
				dataIngredient = []
				dataIngredientFilter = []
				var blockRecipe = document.createElement("div")
				blockRecipe.classList.add("block-recipe")
				container.appendChild(blockRecipe)
				var nameRecipe = document.createElement("div")
				nameRecipe.classList.add("recipe-name")
				blockRecipe.appendChild(nameRecipe)
				nameRecipe.innerHTML = data["meals"][j]["strMeal"]
				dataName.push(nameRecipe.innerHTML)
				var imageRecipe = document.createElement("img")
				imageRecipe.classList.add("recipe-image")
				imageRecipe.setAttribute("src", data["meals"][j]["strMealThumb"])
				imageRecipe.setAttribute("count", number)
				blockRecipe.appendChild(imageRecipe)
				var blockRecipeStructure = document.createElement("div")
				blockRecipeStructure.classList.add("recipe-structure")
				blockRecipe.appendChild(blockRecipeStructure)
					dataIngredient.push(data["meals"][j]["strIngredient1"] + " " + data["meals"][j]["strMeasure1"])
					dataIngredient.push(data["meals"][j]["strIngredient2"] + " " + data["meals"][j]["strMeasure2"])
					dataIngredient.push(data["meals"][j]["strIngredient3"] + " " + data["meals"][j]["strMeasure3"])
					dataIngredient.push(data["meals"][j]["strIngredient4"] + " " + data["meals"][j]["strMeasure4"])
					dataIngredient.push(data["meals"][j]["strIngredient5"] + " " + data["meals"][j]["strMeasure5"])
					dataIngredient.push(data["meals"][j]["strIngredient6"] + " " + data["meals"][j]["strMeasure6"])
					dataIngredient.push(data["meals"][j]["strIngredient7"] + " " + data["meals"][j]["strMeasure7"])
					dataIngredient.push(data["meals"][j]["strIngredient8"] + " " + data["meals"][j]["strMeasure8"])
					dataIngredient.push(data["meals"][j]["strIngredient9"] + " " + data["meals"][j]["strMeasure9"])
					dataIngredient.push(data["meals"][j]["strIngredient10"] + " " + data["meals"][j]["strMeasure10"])
					dataIngredient.push(data["meals"][j]["strIngredient11"] + " " + data["meals"][j]["strMeasure11"])
					dataIngredient.push(data["meals"][j]["strIngredient12"] + " " + data["meals"][j]["strMeasure12"])
					dataIngredient.push(data["meals"][j]["strIngredient13"] + " " + data["meals"][j]["strMeasure13"])
					dataIngredient.push(data["meals"][j]["strIngredient14"] + " " + data["meals"][j]["strMeasure14"])
					dataIngredient.push(data["meals"][j]["strIngredient15"] + " " + data["meals"][j]["strMeasure15"])
					dataIngredient.push(data["meals"][j]["strIngredient16"] + " " + data["meals"][j]["strMeasure16"])
					dataIngredient.push(data["meals"][j]["strIngredient17"] + " " + data["meals"][j]["strMeasure17"])
					dataIngredient.push(data["meals"][j]["strIngredient18"] + " " + data["meals"][j]["strMeasure18"])
					dataIngredient.push(data["meals"][j]["strIngredient19"] + " " + data["meals"][j]["strMeasure19"])
					dataIngredient.push(data["meals"][j]["strIngredient20"] + " " + data["meals"][j]["strMeasure20"])
					
					for(var k = 0; k < dataIngredient.length; k++){
						var lineIngredient = document.createElement("div")
						lineIngredient.classList.add("recipe-ingredient")
						blockRecipeStructure.appendChild(lineIngredient)
						lineIngredient.innerHTML = dataIngredient[k]
					}
					imageRecipe.addEventListener("click", function(){
						var elTarget = event.target
						var countEl = elTarget.getAttribute("count")
						var imageEl = elTarget.getAttribute("src")
					$.getJSON(queryRecipe, function (data){
						for(var k = 0; k < data["meals"].length; k++){
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
							howToCookText = document.createElement("div")
							howToCookText.classList.add("how-to-cook-text")
							howToCook.appendChild(howToCookText)
								for(var l = 0; l < dataInstruction.length; l++){
									howToCookText.innerHTML = dataInstruction[countEl]
								}
						}
						exit.addEventListener("click", function(){
							howToCook.innerHTML = ""
						})
					
					})	
				})	

			}
		})


		
	}

		
	})
})









	/*				var filtered = dataIngredient.filter(function (el) {
  					return el != " ";
					});
					dataIngredientFilter.push(filtered)
					for(var k = 0; k < dataIngredientFilter.length; k++){
						var lineIngredient = document.createElement("div")
						lineIngredient.classList.add("recipe-ingredient")
						blockRecipeStructure.appendChild(lineIngredient)
						lineIngredient.innerHTML = dataIngredientFilter[k]
					}*/


	/*var link = "https://api.edamam.com/search?q="
	var apiId = "&app_id=21d9cb4d&app_key="
	var apiKey = "8879d904ad64205577f4e4b84a1d63d2"

	var query = link + paramSearch + apiId + apiKey


	$.getJSON(query, function (data){
		console.log(data)
		for(var i = 0; i < data["hits"].length; i++){
			console.log(data)
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
			blockRecipe.appendChild(blockRecipeStructure)
			for(var j = 0; j < data["hits"][i]["recipe"]["ingredientLines"].length; j++){
				var lineIngredient = document.createElement("div")
				lineIngredient.classList.add("recipe-ingredient")
				blockRecipeStructure.appendChild(lineIngredient)
				lineIngredient.innerHTML = data["hits"][i]["recipe"]["ingredientLines"][j]
			dataStructure.push(lineIngredient.innerHTML)
			}

				imageRecipe.addEventListener("click", function(){
					for(var i = 0; i < data["hits"].length; i++){
						var elTarget = event.target
						var countEl = elTarget.getAttribute("count")
						var imageEl = elTarget.getAttribute("src")
						howToCook = document.createElement("div")
						howToCook.classList.add("how-to-cook")
						container.appendChild(howToCook)
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
						console.log(data["hits"][i]["recipe"])
					} 
						for(var j = 0; j < data["hits"][countEl]["recipe"]["ingredientLines"].length; j++){
							var lineHowToCookStructure = document.createElement("div")
							lineHowToCookStructure.classList.add("line-how-to-cook-structure")
							howToCookStructure.appendChild(lineHowToCookStructure)
							console.log(data["hits"][countEl]["recipe"]["ingredientLines"][j])	
							dataStructure.push(data["hits"][countEl]["recipe"]["ingredientLines"][j])
							console.log(dataStructure[j])
							lineHowToCookStructure.innerHTML = data["hits"][countEl]["recipe"]["ingredientLines"][j]
						}
				})
		}
	})
})*/
