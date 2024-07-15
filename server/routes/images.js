app.get('/images/:filename', async (req, res) => {
    try {
      const image = await Image.findOne({ filename: req.params.filename });
      if (!image) {
        return res.status(404).send({ status: 'fail', message: 'Image not found' });
      }
      res.send({ status: 'success', data: image.data });
    } catch (err) {
      res.status(400).send({ status: 'fail', message: err.message });
    }
  });