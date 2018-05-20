import React from 'react'
import { Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Meta from 'pi-meta'

class Newsitems extends React.Component {
  render () {
    console.log('+++ Newsitems render', this.props, this.state)
    if (!this.props.items) { return(null) } 
    let newsitems = []
    let idx = 0
    this.props.items.map(i => {
      if (i.item_type === 'report') {
        newsitems.push(<div key={idx++}><NewsitemReport item={i} /></div>)
      } else if (i.item_type === 'gallery') {
        newsitems.push(<div key={idx++}><NewsitemGallery item={i} /></div>)
      } else if (i.item_type === 'video') {
        newsitems.push(<div key={idx++}><NewsitemVideo item={i} /></div>)
      } else if (i.item_type === 'photo') {
        // newsitems.push(<div key={idx++}><NewsitemPhoto item={i} /></div>)
      }
    })
    return (
      <div>{ newsitems } </div>
    )
  }
}


class Newsitem extends React.Component {
  render () {
    console.log('+++ Newsitem render')
    return (
      <div>
        <h5>{this.props.item.name}</h5>
      </div>
    )
  }
}

class NewsitemGallery extends React.Component {
  render () {
    console.log('+++ NewsitemGallery render')
    return (
      <div>newsitemGallery</div>
    )
  }
}

class NewsitemPhoto extends React.Component {
  render () {
    console.log('+++ NewsitemPhoto render')
    return (
      <div>newsitemPhoto</div>
    )
  }
}

class NewsitemVideo extends React.Component {
  render () {
    console.log('+++ NewsitemVideo render', this.props, this.state)
    console.log('+++ link:', Link)

    let linkPath = `/en/videos/show/${this.props.item.youtube_id}` // @TODO: abstract
    return (
      <div>
        { /* <Link to={linkPath}><img src={`https://img.youtube.com/vi/${this.props.item.youtube_id}/0.jpg`} width="100%" alt='' /></Link>
        <h3><Link to={linkPath}>{ this.props.item.name }</Link></h3> */ }
        { /* <Meta item={this.props.item} /> */ }
        <Link to="/aba">render...</Link>
      </div>
    )
  }
}

class NewsitemReport extends React.Component {
  render () {
    console.log('+++ NewsitemReport render')
    return (
      <div >newsitem report</div>
    )
  }
}

export { Newsitems }
export { Newsitem }
export { NewsitemGallery }
export { NewsitemPhoto }
export { NewsitemVideo }
export { NewsitemReport }

