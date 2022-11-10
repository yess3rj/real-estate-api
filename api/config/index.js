import dotenv from 'dotenv'

dotenv.config()

const config = {
    server: {
      port: process.env.PORT || 3000,
      url: process.env.URL || `http://localhost:${process.env.PORT || 3000}`
    },
    database: {
      uri: process.env.DB_URI || 'mongodb://localhost/test',
    },
    jwtSecret: process.env.JWT_SECRET
  };

  export default config