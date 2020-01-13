// [slug].js
import React, {useState, useEffect} from 'react'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../sanity'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Product = () => {
  const [products, setProducts] = useState([])
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Producted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
          />
        </div>
      )}
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    </article>
  )
}

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

Product.getInitialProps = async function (context) {

  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Product