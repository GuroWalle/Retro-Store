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
         title: 'Image',
         name: 'image',
         type: 'image',
      },
      {
         title: 'Vinyls',
         name: 'vinyls',
         type: 'reference',
         to: [{ type: 'vinyls' }],
      },
   ]
}
