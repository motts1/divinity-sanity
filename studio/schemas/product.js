export default {

    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
          name: 'price',
          title: 'Price',
          type: 'number',
          options: {
            maxLength: 8
          }
          },
          {
            name: 'id',
            title: 'ID',
            type: 'number',
            options: {
              maxLength: 12
            }
          },
          {
            name: 'sku',
            title: 'SKU',
            type: 'number',
            options: {
              maxLength: 12
            }
          },
          {
            name: 'image',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          // {
          //   name: 'categories',
          //   title: 'Categories',
          //   type: 'array',
          //   of: [{type: 'reference', to: {type: 'category'}}]
          // },
          {
            name: 'categories',
            title: 'Categories',
            type: 'string',
            options: {
              list: [
                  {title: 'Women', value: 'Women'},
                  {title: 'Men', value: 'Men'},
                  {title: 'Accessories', value: 'Accessories'},
                  {title: 'Sale', value: 'Sale'},            
              ],
              layout: 'dropdown'
            }
          },
          {
            name: 'size',
            title: 'Size',
            type: 'string',
            options: {
              list: [
                  {title: 'XS', value: 'XS'},
                  {title: 'S', value: 'S'},
                  {title: 'M', value: 'M'},
                  {title: 'L', value: 'L'}, 
                  {title: 'XL', value: 'XL'}, 
                  {title: 'One Size', value: 'One Size'},         
              ],
              layout: 'dropdown'
            }
          },
          {
            name: 'color',
            title: 'Color',
            type: 'string',
            options: {
              list: [
                  {title: 'Black', value: 'Black'},
                  {title: 'White', value: 'White'},
                  {title: 'Pink', value: 'Pink'},
                  {title: 'Purple', value: 'Purple'},
                  {title: 'Blue', value: 'Blue'},
                  {title: 'Green', value: 'Green'},
                  {title: 'Red', value: 'Red'},            
                  {title: 'Rainbow', value: 'Rainbow'},
                  {title: 'Metallic', value: 'Metallic'},
                  {title: 'Grey', value: 'Grey'},
                  {title: 'Yellow', value: 'Yellow'},
                  {title: 'Orange', value: 'Orange'},
                  {title: 'Pattern', value: 'Pattern'},
                  {title: 'Silver', value: 'Silver'},
                  {title: 'Sparkle', value: 'Sparkle'},
              ],
              layout: 'dropdown'
            }
          },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
          }
        ],
        preview: {
          select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
          },
          prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
              subtitle: author && `by ${author}`
            })
          }
        }
      }
      