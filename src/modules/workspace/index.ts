import {dirnameJoin} from '../../file'

export default {
  workspace: {
    list: {
      module: dirnameJoin('modules/workspace/list'),
    },
    create: {
      module: dirnameJoin('modules/workspace/create'),
    },
    delete: {
      module: dirnameJoin('modules/workspace/delete'),
    },
    promote: {
      module: dirnameJoin('modules/workspace/promote'),
    },
    use: {
      module: dirnameJoin('modules/workspace/use'),
    },
    reset: {
      module: dirnameJoin('modules/workspace/reset'),
    },
  },
}