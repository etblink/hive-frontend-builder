const dhive = require('@hiveio/dhive');
// Initialize a client
const client = new dhive.Client('https://api.hive.blog');

app.get('/account/@:username', async (req, res) => {
    try {
        const account = await client.database.getAccounts([req.params.username]);
        res.json(account);
    } catch (error) {
        res.status(500).send('Error fetching account information');
    }
});