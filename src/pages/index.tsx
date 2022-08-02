import { useMachine } from '@xstate/react'
import { todoMachine } from '~/machine/todoMachine'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Index = () => {
  const [state, send ] = useMachine(todoMachine, {
    services : {
      loadTodos: async () =>{
        return []
      }
    }
  })
  return (
    <Container height="100vh">
      <DarkModeSwitch />
      <pre>

      </pre>
    </Container>
  )
}
export default Index
