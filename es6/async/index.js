function fetchData() {}  // 获取数据

function fetch() {
  return (
    fetchData()
    .then(() => {
      return 'done'
    })
  )
}


async function fetch() {
  await fetchData()
  return 'done'
}

function fetch() {
  try {
    fetchData()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  } catch (error) {
    console.log(error);
  }
}

async function fetch() {
  try {
    const data = JSON.parse(await fetchData())
  } catch (error) {
    
  }
}