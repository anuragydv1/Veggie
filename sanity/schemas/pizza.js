export default {
    name: 'pizza',
    type: 'document',
    title: 'pizza',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'name'
      },
      {
        name: 'details',
        type: 'string',
        title: 'details'
      },
      {
        name: 'price',
        type: 'array',
        title: 'price',
        of : [{type :'number'}]
      },
      {
        name: 'image',
        type: 'image',
        title: 'image',
        options : {
            hotspot : true 
        }
      },
      {
        name: 'slug',
        title: 'slug',
        type : 'slug',
        options : {
            source : 'name',
            maxLength : 90
        }
      }
    ]
  }