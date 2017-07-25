import {StackNavigator} from 'react-navigation'
import GameList from '@screens/Games/GameList';

const GamesNavigator = StackNavigator(
    {
        gameList: {
            screen: GameList,
        }
    },
    {
        initialRouteName: 'gameList'
    }
)
export default GamesNavigator;