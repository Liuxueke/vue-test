module.exports = {
  api: '/api/mock/banner',
  response: function(req,res){
    res.json({
      success: true,
      data: [
        { url: 'baidu.com', img: 'https://r.mzmoney.com/mzuploads/p_a_dadvertising/201704/7e7251befd5e48c28f29ed8480e05584.png', desc: 'banner1'},
        { url: 'baidu.com', img: 'https://r.mzmoney.com/mzuploads/advertising/201609/7d8379ee79ec4c338e51ee3a9b229383.jpg', desc: 'banner2'}
      ]
    })
  }
}