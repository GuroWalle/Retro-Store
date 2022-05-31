import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import artists from './documents/artists.js'
import genres from './documents/genres.js'
import vinyls from './documents/vinyls.js'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    vinyls,
    artists,
    genres,
  ]),
})
