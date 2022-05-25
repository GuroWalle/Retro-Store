export default {
   title: 'Genres',
   name: 'genres',
   type: 'document',
   fields: [
      {
         title: 'Genre',
         name: 'title',
         type: 'string',
         validation: Rule => Rule.required(),
      },
   ]
}