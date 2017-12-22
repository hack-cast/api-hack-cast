const Storage = require('@google-cloud/storage')
const bucketName = process.env.CLOUD_BUCKET_NAME
const storage = Storage({
  projectId: process.env.PROJECT_ID,
  keyFilename: 'keyFile.json'
})
const bucket = storage.bucket(bucketName)
const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${bucketName}/${filename}`
}

module.exports = (req, res, next) => {
  
  if (!req.file) {
    next()
  }

  const gcsname = `${Date.now()}-${req.file.originalname}`
  const file = bucket.file(`/assets/${gcsname}`)
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })
  
  stream.on('error', (err) => {
    console.log(err)
    req.file.cloudStorageError = err
    next(err)
  })

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    file.makePublic()
      .then(() => {
        
        req.file.cloudStoragePublicUrl = getPublicUrl(`assets/${gcsname}`)
        next()
      })
  })

  stream.end(req.file.buffer)
}