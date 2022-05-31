export default {
   title: 'Artists',
   name: 'artists',
   type: 'document',
   fields: [
      {
         title: 'Name',
         name: 'name',
         type: 'string',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Vinyls',
         name: 'vinyls',
         type: 'reference',
         to: [{ type: 'vinyls' }],
         validation: Rule => Rule.required(),
      },
   ]
}
