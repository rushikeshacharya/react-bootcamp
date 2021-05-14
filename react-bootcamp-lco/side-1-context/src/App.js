import React, {Fragment} from 'react'
import Provider from './provider'
import Context from './context'

const AgentBond = () =>{
  return(
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h3>Agent Info:</h3>
            <p>
              Mission Name: {context.data.mname}
            </p>
            <h2>Mission Status: {context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}>Choose to accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}
const AgentTwo = () =>{
  return <AgentBond />
}
const AgentOne = () =>{
  return <AgentTwo />
}
const Agents = () => {
  return <AgentOne />
}

const App = () => {

  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}


export default App;