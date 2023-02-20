import './App.css';
import {db} from './firebase-config'
import { collection, addDoc } from '@firebase/firestore';
function App() {

    const productsCollectionRef = collection(db, "products");

    var menu =[
      {
          title:"Cà Phê Đen",
          size:["M"],
          priceOnSize:{M:15000},
          image:"/img/cf-01.png",
          categorySlug:"coffee",
          color:"coffee",
          description:"Cà phê nguyên chất được pha từ hạt cà phê đã được rang, xay theo tiêu chuẩn.",
          toppings:[],
          slug:"cf-01",
      },
      {
          title:"Bạc Xỉu",
          size:["M"],
          priceOnSize:{M:20000},
          image:"/img/cf-02.png",
          categorySlug:"coffee",
          color:"coffee",
          description:"Công thức cà phê sữa, nhưng thành phần sữa sẽ nhiều hơn so với lượng cà phê.",
          toppings:[],
          slug:"cf-02",
      },
      {
          title:"Cà Phê Sữa",
          size:["M"],
           priceOnSize:{M:18000},
          image:"/img/cf-03.png",
          categorySlug:"coffee",
          color:"coffee",
          description:"Một ly cà phê sữa ngon chính là hài hòa được cả vị đắng đặc trưng và ngọt từ sữa.",
          toppings:[],
          slug:"cf-03",
      },
      {
          title:"Cà Phê Sữa Tươi",
          size:["M"],
          priceOnSize:{M:20000},
          image:"/img/cf-04.png",
          categorySlug:"coffee",
          color:"coffee",
          description:"Sữa tươi và cà phê nguyên chất mang hương thơm vị béo của sữa và một chút đắng nhẹ của cafe.",
          toppings:[],
          slug:"cf-04",
      },
      {
          title:"Trà Sữa Đài Loan",
          size:["M","L"],
          priceOnSize:{M:25000,L:32000},
          image:"/img/mt-01.png",
          categorySlug:"milktea",
          color:"milktea",
          description:"Vị trà đậm thơm nồng làm điểm nhấn nổi bật, không bị sữa lấn át mất chát trà.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              {
                  name:"Phô Mai Tươi",
                  id:"tp-08",
                  price:10000,
                  image:"/img/tp-08.png"
              },
          ],
          slug:"mt-01",
      },
      {
          title:"Trà Sữa Ôlong Lài",
          size:["M","L"],
          priceOnSize:{M:25000,L:32000},
          image:"/img/mt-02.png",
          categorySlug:"milktea",
          color:"milktea",
          description:"Trà Ô long thơm, màu sắc nhẹ, độ chát và ngọt hậu dễ gây nghiện.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              {
                  name:"Phô Mai Tươi",
                  id:"tp-08",
                  price:10000,
                  image:"/img/tp-08.png"
              },
          ],
          slug:"mt-02",
      },
      {
          title:"Trà Sữa Gạo Rang",
          size:["M","L"],
          priceOnSize:{M:25000,L:32000},
          image:"/img/mt-03.png",
          categorySlug:"milktea",
          color:"milktea",
          description:"Hương gạo thơm nhẹ, vị nguyên bản kết hợp cùng một số nguyên liệu đặc trưng.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              {
                  name:"Phô Mai Tươi",
                  id:"tp-08",
                  price:10000,
                  image:"/img/tp-08.png"
              },
          ],
          slug:"mt-03",
      },
      {
          title:"Trà Sữa Thảo Mộc",
          size:["M","L"],
          priceOnSize:{M:30000,L:37000},
          image:"/img/mt-04.png",
          categorySlug:"milktea",
          color:"milktea",
          description:"Cao quy linh hay còn gọi là quy phục linh, 1 món tráng miệng của người Hoa, màu đen, có vị đắng nhẹ.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              {
                  name:"Phô Mai Tươi",
                  id:"tp-08",
                  price:10000,
                  image:"/img/tp-08.png"
              },
          ],
          slug:"mt-04",
      },
      {
          title:"Trà Sữa Uyên Ương",
          size:["M","L"],
          priceOnSize:{M:25000,L:32000},
          image:"/img/mt-05.png",
          categorySlug:"milktea",
          color:"milktea",
          description:"Sự kết hợp tinh tế giữa trà sữa và cà phê mang đến lôi cuốn và hấp dẫn, quấn quýt không muốn rời",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              {
                  name:"Phô Mai Tươi",
                  id:"tp-08",
                  price:10000,
                  image:"/img/tp-08.png"
              },
          ],
          slug:"mt-05",
      },
      {
          title:"Trà Đen Macchiato",
          size:["M"],
          priceOnSize:{M:35000},
          image:"/img/t-01.png",
          categorySlug:"tea",
          color:"tea",
          description:"Cũng như tình yêu, vị đắng chát của trà đen và vị ngọt béo của Macchiato tưởng không hợp mà lại hợp không tưởng.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-01",
      },
      {
          title:"Trà Ôlong Macchiato",
          size:["M"],
          priceOnSize:{M:35000},
          image:"/img/t-02.png",
          categorySlug:"tea",
          color:"tea",
          description:"Là sự kết hợp đặc biệt ở hương trà than và lớp Macchiato beo béo bồng bềnh.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-02",
      },
      {
          title:"Trà Hạt Sen Macchiato",
          size:["M"],
          priceOnSize:{M:40000},
          image:"/img/t-03.png",
          categorySlug:"tea",
          color:"tea",
          description:"Trà có vị ngọt dịu nhẹ của hạt sen pha lẫn chút béo mặn của lớp Macchiato.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-03",
      },
      {
          title:"Trà Trái Cây",
          size:["M"],
          priceOnSize:{M:40000},
          image:"/img/t-04.png",
          categorySlug:"tea",
          color:"tea",
          description:"Với cái nắng oi bức của mặt trời thì trà trái cây được xem như là một cách để giải nhiệt.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              {
                  name:"Phô Mai Tươi",
                  id:"tp-08",
                  price:10000,
                  image:"/img/tp-08.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image:`/assets/img/tp-07.png`
              },
              // {
              //     name:"Mứt Ổi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-04",
      },
      {
          title:"Trà Ổi Hồng",
          size:["M"],
          priceOnSize:{M:35000},
          image:"/img/t-05.png",
          categorySlug:"tea",
          color:"tea",
          description:"Với cái nắng oi bức của mặt trời thì trà trái cây được xem như là một cách để giải nhiệt.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-05",
      },
      {
          title:"Trà Đen Vải Thiều",
          size:["M"],
          priceOnSize:{M:30000},
          image:"/img/t-06.png",
          categorySlug:"tea",
          color:"tea",
          description:"Trà đen vải thiều mang vị ngọt thanh của vải kết hợp với vị chua của chanh và hương trà đen thơm nhẹ.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-06",
      },
      {
          title:"Trà Nhãn",
          size:["M"],
          priceOnSize:{M:35000},
          image:"/img/t-07.png",
          categorySlug:"tea",
          color:"tea",
          description:"Những trái nhãn tươi có vị ngọt, mùi thơm đặc trưng thanh mát, giải nhiệt.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-07",
      },{
          title:"Trà Đen Thảo Mộc",
          size:["M"],
          priceOnSize:{M:35000},
          image:"/img/t-08.png",
          categorySlug:"tea",
          color:"tea",
          description:"Trà có vị đắng nhẹ của trà đen và cao quy linh. Dành cho những ai ghét màu hồng, yêu bóng tối.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"t-08",
      },
      {
          title:"Chè Thảo Mộc",
          size:["M","L"],
          priceOnSize:{M:40000,L:50000},
          image:"/img/ds-01.png",
          categorySlug:"desert",
          color:"desert",
          description:"Cùng với khoai dẻo, trân châu, vị ngọt của kem béo và ngọt thanh của đá thảo mộc sẽ giảm bớt vị đắng của cao quy linh.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"ds-01",
      },
      {
          title:"Chè Đậu Đỏ",
          size:["M","L"],
          priceOnSize:{M:35000,L:45000},
          image:"/img/ds-02.png",
          categorySlug:"desert",
          color:"desert",
          description:"Sự kết hợp giữa đậu đỏ và sương sáo, thêm khoai dẻo mang đến sự bùng nổ vị giác.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"ds-02",
      },
      {
          title:"Trứng Nấu Trà Đen",
          size:["M","L"],
          priceOnSize:{M:20000,L:25000},
          image:"/img/ds-03.png",
          categorySlug:"desert",
          color:"desert",
          description:"Trứng nấu trà đen mang hương thơm đặc trưng từ các loại thảo mộc, là một món ăn bổ dưỡng của người Đài Loan.",
          toppings:[
              // {
              //     name:"Trân Châu Đen",
              //     id:"tp-01",
              //     price:5000,
              //     image: "/img/tp-01.png",
              // },
              // {
              //     name:"Trân Châu Hoàng Kim",
              //     id:"tp-02",
              //     price:5000,
              //     image: "/img/tp-02.png"
              // },
              // {
              //     name:"Khoai Dẻo",
              //     id:"tp-03",
              //     price:7000,
              //     image: "/img/tp-03.png"
              // },
              // {
              //     name:"Mứt Ôỉ",
              //     id:"tp-04",
              //     price:7000,
              //     image: "/img/tp-04.png"
              // },
              
              // {
              //     name:"Macchiato",
              //     id:"tp-05",
              //     price:10000,
              //     image: "/img/tp-05.png"
              // },
              // {
              //     name:"Cao Quy Linh",
              //     id:"tp-06",
              //     price:10000,
              //     image: "/img/tp-06.png"
              // },
              // {
              //     name:"Hạt Sen",
              //     id:"tp-07",
              //     price:10000,
              //     image: "/img/tp-07.png"
              // },
              // {
              //     name:"Phô Mai Tươi",
              //     id:"tp-08",
              //     price:10000,
              //     image:"/img/tp-08.png"
              // },
          ],
          slug:"ds-03",
      },
      {
          title:"Tàu Hủ Singapore",
          size:["M","L"],
          priceOnSize:{M:18000},
          image:"/img/ds-04.png",
          categorySlug:"desert",
          color:"desert",
          description:"Tàu hủ Singapore mang vị đặc trưng của đậu nành ngọt nhẹ ăn kèm với topping tùy sở thích.",
          toppings:[
              {
                  name:"Trân Châu Đen",
                  id:"tp-01",
                  price:5000,
                  image: "/img/tp-01.png",
              },
              {
                  name:"Trân Châu Hoàng Kim",
                  id:"tp-02",
                  price:5000,
                  image: "/img/tp-02.png"
              },
              {
                  name:"Khoai Dẻo",
                  id:"tp-03",
                  price:7000,
                  image: "/img/tp-03.png"
              },
              {
                  name:"Mứt Ôỉ",
                  id:"tp-04",
                  price:7000,
                  image: "/img/tp-04.png"
              },
              
              {
                  name:"Macchiato",
                  id:"tp-05",
                  price:10000,
                  image: "/img/tp-05.png"
              },
              {
                  name:"Cao Quy Linh",
                  id:"tp-06",
                  price:10000,
                  image: "/img/tp-06.png"
              },
              {
                  name:"Hạt Sen",
                  id:"tp-07",
                  price:10000,
                  image: "/img/tp-07.png"
              },
              {
                  name:"Phô Mai Tươi",
                  id:"tp-08",
                  price:10000,
                  image:"/img/tp-08.png"
              },
          ],
          slug:"ds-04",
      },
  ]
  const createItem = async (obj)=>{
      await addDoc(productsCollectionRef,{...obj})
  }


  

   

  return (
    <div className="App">
     {menu.map((item,index)=>{
      return(
        <div key={index}>
          <h1>{item.title}</h1>
          <button onClick={()=>{createItem(item)}}>add</button>
        </div>
      )
     })}
    </div>
  );
}

export default App;
