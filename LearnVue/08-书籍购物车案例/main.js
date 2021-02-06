const app = new Vue({
  el: '#app',
  data: {
    books: [
      {id: 1, name: '算法', date: '2006-9', price: 85, count: 1},
      {id: 2, name: '编程艺术', date: '2016-8', price: 65, count: 3},
      {id: 3, name: '编程珠玑', date: '2006-2', price: 77, count: 4},
      {id: 4, name: '代码大全', date: '2001-2', price: 89, count: 7},
    ],  
  },
  methods: {
    sub(index) {
      if(this.books[index].count > 0) {
        this.books[index].count--
      }
    },
    add(index) {
      this.books[index].count++
    },
    isShow(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + Number(price).toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      let sum = 0;
      //1.普通的for循环
      // for(let i = 0; i < this.books.length; i++) {
      //   sum += this.books[i].price * this.books[i].count
      // }
      // return sum
      
      // 2.for(let i in this.books)
      // for(let i in this.books) {
      //   sum += this.books[i].price * this.books[i].count
      // }
      // return sum

      // 3.for(let i in this.books)
      // for(let item of this.books) {
      //   sum += item.price * item.count 
      // }
      // return sum

      //reduce
      return this.books.reduce(function (preValue, book) {
        return this.books.price * book.count
      }, 0)

    }
  }
})

// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入新数组中
// false：当返回false时，函数内部会过滤这次n

const nums = [10, 20, 111, 222, 444, 40, 50]

// 1.filter函数的使用
//10 20 40 50
let newNums = nums.filter(function (n) {
  return n < 100
})

//2.map函数的使用
let new2 = newNums.map(function (n) {
  return n * 2
})

//3.reduce函数的使用
let total = new2.reduce(function (preValue, n) {
  return preValue + n
}, 0)

// 第一次： preValue 0 n 20
// 第二次： preValue 20 n 40
// 第三次： preValue 60 n 80
// 第四次： preValue 140 n 100
240
