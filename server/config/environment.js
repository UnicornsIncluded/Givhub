process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.PORT = process.env.PORT || 3000

process.env.DATABASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'mongodb+srv://heroku_w0tg51xf:7PptDVeB0ecchlNT@cluster-w0tg51xf.mxne0.mongodb.net/<dbname>?retryWrites=true&w=majority'
    : 'mongodb://127.0.0.1:27017/givhub'
