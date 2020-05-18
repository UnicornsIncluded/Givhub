process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.PORT = process.env.PORT || 3000

process.env.DATABASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'mongodb://heroku_w0tg51xf:fcqce0ir6sfk6dsfa23ata67ng@ds261626.mlab.com:61626/heroku_w0tg51xf'
    : 'mongodb://127.0.0.1:27017/givhub'
