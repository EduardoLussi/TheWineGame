const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/19535f8b7b8441f9b5cf73928efa8c40'));
const CorkToken = require('../contracts/TheWineGame.json');
const contractAddress = '0xcf51a39f48510a62ec99014b6ea5c7f352665e7b';
const contract = new web3.eth.Contract(CorkToken.abi, contractAddress);

module.exports = {
    async getToken(req, res) {
        console.log('ok');
        let tokenId = req.params.tokenId;

        if (!isNumeric(tokenId)) {
            res.sendStatus(404)
            return
        }
    
        res.setHeader('Content-Type', 'application/json');

        let value = cache.get(tokenId);
        if (value !== undefined){
            res.json(value)
            return
        }

        try {
            let { year, month, day, guests, beverage_brand, baverage_name, title } = await contract.methods.getCork(tokenId).call()
    
            let date = new Date()
            date.setUTCFullYear(year, month-1, day)

            let result = {
                name: title,
                description: "The Wine Game: An NFT for collecting wine moments!",
                image: `localhost:3333/token/img/${tokenId}`,
                attributes: [
                    {
                        "trait_type": "Brand",
                        "value": beverage_brand
                    },
                    {
                        "trait_type": "Guests",
                        "value": guests
                    },
                    {
                        "display_type": "date", 
                        "trait_type": "Date", 
                        "value": date.getTime()
                    }
                ]
            }
            cache.set(tokenId, result)
            res.json(result)
        }
        catch(error) {
            console.log(error)
            res.sendStatus(404)
        }
    },
    async getTokenImage(req, res) {
        const tokenId = req.params.tokenId;

        res.sendFile(`${require('path').dirname(require.main.filename)}/db/img/artwokrs/${tokenId}.jpg`);
    }
}