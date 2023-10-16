const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritesList: []
		},
		actions: {
				
				updateFavoritesList: (item, type) => {
					let itemCopy = item 
					itemCopy["type"] = type
					if (getStore().favoritesList.map((favorite) => {
						return favorite.name
					}).includes(item.name)){
						return
					} else 
					setStore({
						favoritesList:[
							...getStore().favoritesList,
							itemCopy
						]
					})
				},

				removeFavorites: (item) => {
					const updatedFavoritesList = getStore().favoritesList.filter((favorite) => !(favorite.id === item.id && favorite.name === item.name));
					setStore({
						favoritesList: updatedFavoritesList
					})
				}
			}
		}
	};

export default getState;
