
const express = require('express')
const cors = require('cors')
const request = require('request')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/update', (req, res) => {
    let shop = 'www.brewed.online'
    let access_token = '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'
    let product_id = req.query.product_id
    let tags = req.query.tags
    let url = `https://${shop}/admin/api/2021-01/products/${product_id}/tags.json`
    let options = {
        method: 'PUT',
        url: url,
        headers: {
            'X-Shopify-Access-Token': access_token
        },
        json: {
            "tags": tags
        }
    }
    request(options, (error, response) => {
        if (error) throw new Error(error)
        res.send(response.body)
    })
})
