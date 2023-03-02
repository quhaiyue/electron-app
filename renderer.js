const func = async () => {
  const response = await window.props.ping()
  console.log(response) // 打印 'pong'
}

func()