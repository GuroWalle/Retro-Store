export default {
   title: 'Vinyls',
   name: 'vinyls',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'string',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Artist(s)',
         name: 'artist',
         type: 'array',
         of: [
            {
               type: 'reference',
               to: [
                  { type: 'artists' },
               ]
            }
         ],
         validation: Rule => Rule.required(),

      },
      {
         title: 'Price',
         name: 'price',
         type: 'number',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Release',
         name: 'release',
         type: 'date',
         options: {
            dateFormat: 'YYYY MMM D',
         },
         validation: Rule => Rule.required(),
      },
      {
         title: 'Description',
         name: 'description',
         description: 'Short description about the vinyl',
         type: 'text',
         validation: Rule => [
            Rule.required(),
            Rule.max(300).warning('Keep descriptions short')
         ]
      },
      {
         title: 'Image',
         name: 'cover',
         type: 'image',
         validation: Rule => Rule.required(),
      },
      {
         title: 'Genre',
         name: 'genre',
         type: 'array',
         of: [
            {
               type: 'reference',
               to: [
                  { type: 'genres' },
               ]
            }
         ],
         validation: Rule => Rule.required(),
      },
   ]
}