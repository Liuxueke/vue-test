module.exports = {
  api: '/api/mock/index_product',
  response: function(req,res){
    res.json({
      success: true,
      data: {
        name: "测试731001",
        percent: "8.00",
        term: "30",
        amount: "0.01"
      }
    })
  }
}