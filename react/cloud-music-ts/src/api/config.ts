import axios from 'axios'
export const baseUrl = 'http://localhost:3001/'

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log('网络错误');
  }
)

export { axiosInstance }

export const categoryTypes = [{
  id: 0,
  name: "华语男",
  key: {
    type: '1',
    area: '7'
  }
},
{
  id: 1,
  name: "华语女",
  key: {
    type: '2',
    area: '7'
  }
},
{
  id: 2,
  name: "华语组合",
  key: {
    type: '3',
    area: '7'
  }
},
{
  id: 3,
  name: "欧美男",
  key: {
    type: '1',
    area: '96'
  }
},
{
  id: 4,
  name: "欧美女",
  key: {
    type: '2',
    area: '96'
  }
},
{
  id: 5,
  name: "欧美组合",
  key: {
    type: '3',
    area: '96'
  }
},
{
  id: 6,
  name: "日本男",
  key: {
    type: '1',
    area: '8'
  }
},
{
  id: 7,
  name: "日本女",
  key: {
    type: '2',
    area: '8'
  }
},
{
  id: 8,
  name: "日本组合",
  key: {
    type: '3',
    area: '8'
  }
},
{
  id: 9,
  name: "韩国男",
  key: {
    type: '1',
    area: '16'
  }
},
{
  id: 10,
  name: "韩国女",
  key: {
    type: '2',
    area: '16'
  }
},
{
  id: 11,
  name: "韩国组合",
  key: {
    type: '3',
    area: '16'
  }
},
{
  id: 12,
  name: "其他男歌手",
  key: {
    type: '1',
    area: '0'
  }
},
{
  id: 13,
  name: "其他女歌手",
  key: {
    type: '2',
    area: '0'
  }
},
{
  id: 14,
  name: "其他组合",
  key: {
    type: '3',
    area: '0'
  }
},
];

// 歌手首字母
export const alphaTypes = [{
  id: 0,
  key: "A",
  name: "A"
},
{
  id: 1,
  key: "B",
  name: "B"
},
{
  id: 2,
  key: "C",
  name: "C"
},
{
  id: 3,
  key: "D",
  name: "D"
},
{
  id: 4,
  key: "E",
  name: "E"
},
{
  id: 5,
  key: "F",
  name: "F"
},
{
  id: 6,
  key: "G",
  name: "G"
},
{
  id: 7,
  key: "H",
  name: "H"
},
{
  id: 8,
  key: "I",
  name: "I"
},
{
  id: 9,
  key: "J",
  name: "J"
},
{
  id: 10,
  key: "K",
  name: "K"
},
{
  id: 11,
  key: "L",
  name: "L"
},
{
  id: 12,
  key: "M",
  name: "M"
},
{
  id: 13,
  key: "N",
  name: "N"
},
{
  id: 14,
  key: "O",
  name: "O"
},
{
  id: 15,
  key: "P",
  name: "P"
},
{
  id: 16,
  key: "Q",
  name: "Q"
},
{
  id: 17,
  key: "R",
  name: "R"
},
{
  id: 18,
  key: "S",
  name: "S"
},
{
  id: 19,
  key: "T",
  name: "T"
},
{
  id: 20,
  key: "U",
  name: "U"
},
{
  id: 21,
  key: "V",
  name: "V"
},
{
  id: 22,
  key: "W",
  name: "W"
},
{
  id: 23,
  key: "X",
  name: "X"
},
{
  id: 24,
  key: "Y",
  name: "Y"
},
{
  id: 25,
  key: "Z",
  name: "Z"
}
];



//mock 数据
export const currentAlbum = {
  creator: {
    avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
    nickname: "浪里推舟"
  },
  coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
  subscribedCount: 2010711,
  name: "听完就睡，耳机是天黑以后柔软的梦境",
  tracks:[
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{name: "张学友"}, {name: "周华健"}],
      al: {
        name: "学友 热"
      }
    },
  ]
}