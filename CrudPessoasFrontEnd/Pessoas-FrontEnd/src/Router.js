import {createStackNavigator , createAppContainer} from 'react-navigation';
import MainPage from './pages/MainPage'
import CreatePeople from './pages/CreatePeople'
import ListPeople from './pages/ListPeople'
import EditPeople from './pages/EditPeople'

const stackNavigator = createStackNavigator({
    'MainPage':{
        screen: MainPage
    },
    'CreatePeople':{
        screen: CreatePeople
    },
    'ListPeople':{
        screen:ListPeople
    },
    'EditPeople':{
        screen:EditPeople
    }
})

const AppContainer = createAppContainer(stackNavigator)

export default AppContainer;