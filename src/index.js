

require('dotenv')
const http = require('http')
const app = require('./app')
const { connectDB } = require('./db/index')


const server = http.createServer(app)

const port = process.env.PORT || 8000;

// This fun for Db connection and server listen

const main = async () => {
    try {
        await connectDB()

        server.listen(3000, async () => {
            console.log(`Server is listening on port ${port}`);
        })

    } catch (e) {
        console.log('Database Error')
        console.log(e)
    }

}
main()