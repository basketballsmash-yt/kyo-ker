const WebSocket = require("ws")
cards = [
  {"name":"理科", "cardID":0, "cardNumber":0, "cardStrength":0},
  {"name":"理科", "cardID":0, "cardNumber":1, "cardStrength":0},

  {"name":"国語", "cardID":1, "cardNumber":2, "cardStrength":1},
  {"name":"国語", "cardID":1, "cardNumber":3, "cardStrength":1},
  {"name":"国語", "cardID":1, "cardNumber":4, "cardStrength":1},

  {"name":"社会", "cardID":2, "cardNumber":5, "cardStrength":2},
  {"name":"社会", "cardID":2, "cardNumber":6, "cardStrength":2},
  {"name":"社会", "cardID":2, "cardNumber":7, "cardStrength":2},

  {"name":"数学", "cardID":3, "cardNumber":8, "cardStrength":3},
  {"name":"数学", "cardID":3, "cardNumber":9, "cardStrength":3},
  {"name":"数学", "cardID":3, "cardNumber":10, "cardStrength":3},

  {"name":"英語", "cardID":4, "cardNumber":11, "cardStrength":4},
  {"name":"英語", "cardID":4, "cardNumber":12, "cardStrength":4},
  {"name":"英語", "cardID":4, "cardNumber":13, "cardStrength":4},

  {"name":"体育", "cardID":5, "cardNumber":14, "cardStrength":5},
  {"name":"体育", "cardID":5, "cardNumber":15, "cardStrength":5},
  {"name":"体育", "cardID":5, "cardNumber":16, "cardStrength":5},
  
  {"name":"体育", "cardID":5, "cardNumber":12, "cardStrength":5},]