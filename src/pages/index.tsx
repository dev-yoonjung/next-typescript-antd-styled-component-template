import { SmileOutlined } from '@ant-design/icons'
import { Result } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Container>
      <Result
        icon={<SmileOutlined />}
        title="Hello, World!"
        extra="This is Next.js app template with ant-design and styled-components"
      />
    </Container>
  )
}
