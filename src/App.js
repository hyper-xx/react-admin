import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'

import { adminRouter } from './routers'
import { Frame } from './components'

const menus = adminRouter.filter(route => route.isNav === true)


class App extends Component {
    render() {
        return (
            
            <Frame menus={menus}>
                <div>
                {/* <div>
                    公共部分
                </div> */}
                <Switch>
                    {
                        adminRouter.map(route => {
                            return <Route key={route.pathname} path={route.pathname} exact={route.exact} render={(routerProps) => {
                                return <route.component {...routerProps} />
                            }} />
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                    <Redirect to='/404'  />
                </Switch>
            </div>
            </Frame>

        )
    }
}


export default App