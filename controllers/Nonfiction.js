const getNonfiction = (req, res) => {
    res.send(
        [
            {
                id: 1,
                title: 'Surrender',
                author: 'Bono',
                cover: 'https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780525521044.jpg',
                isbn13: 9780525521044,
                description: 'The lead singer of the Irish rock band U2 offers details of his life, career and activism.'
            }
        ]
    )
}

module.exports = {
    getNonfiction
}