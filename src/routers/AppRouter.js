import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from '../components/layaouts/layaout'
import Navigation from '../components/Navigation'
import AccountPage from '../paginas/AccountPage'
import UsersPage from '../paginas/admin/UsersPage'
import HomePage from '../paginas/HomePage'
import LoginPage from '../paginas/LoginPage'
import NotFoundPage from '../paginas/NotFoundPage'
import ProjectsPage from '../paginas/ProjectsPage'
import RegisterPage from '../paginas/RegisterPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function AppRouter() {
    return (
        <Router>
            <Layout>
            
            <Switch>
                <Route exact path="/" component={HomePage} />
                <PublicRoute exact path="/login" component={LoginPage} />
                <PublicRoute exact path="/register" component={RegisterPage} />
                <PrivateRoute exact path="/account" component={AccountPage} />
                <PrivateRoute exact path="/projects" component={ProjectsPage} />
                <PrivateRoute exact path="/admin/users" component={UsersPage} />

                <Route path="*" component={NotFoundPage} />
            
            </Switch>
            </Layout>
        </Router>
        
    );
}
