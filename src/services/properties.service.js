

 export  const getPropertiesDetails = () => {
       return fetch('http://cors-anywhere.herokuapp.com/api.mcmakler.de/v1/advertisements').then(res => {
            return res.json();
        }).then(response=>{
            let firstTenElements = response.data.slice(0,10);
            let cardsArray = [];
            firstTenElements.forEach((element)=>{
                let cardDetails = {
                    title: element.title,
                    advertisementPrice: element.advertisementPrice,
                    realestateSummary: element.realestateSummary,
                    visibleAddress: element.userWishes? element.userWishes.visibleAddress : true,
                    imageUrls: []

                };

                for(let key in element.advertisementAssets){
                    if(element.advertisementAssets.hasOwnProperty(key) && key !== "advertisementThumbnails"){
                        cardDetails.imageUrls.push(element.advertisementAssets[key].advertisementThumbnails.thumb_xs.url)
                    }
                }

                cardsArray.push(cardDetails);
            })
            return cardsArray;
        }).catch(error => {
            console.log(error)
        })
    };

