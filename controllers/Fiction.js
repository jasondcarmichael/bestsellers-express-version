const getFiction = (req, res) => {
    res.send(
        [
            {
                id: 1,
                title: 'Demon Copperhead',
                author: 'Barbara Kingsolver',
                cover: 'https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780063251922.jpg',
                isbn13: 9780063251922,
                description: 'A reimagining of Charles Dickens “David Copperfield” set in the mountains of southern Appalachia.'
            }
        ]
    )
}

module.exports = {
    getFiction
}