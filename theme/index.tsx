import React from 'react'
import { ConfigProvider } from 'antd'

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider theme={{ token: { fontFamily: 'Noto Sans KR' } }}>
      {node}
    </ConfigProvider>
  </>
)

export default withTheme
