import Index from '../pages/index'
import Favorite from '../pages/favorite'
import Detail from '../pages/detail'

const routes = {
  '/': Index,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
