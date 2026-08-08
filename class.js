class Object{
  static video(name,id){
    const elem = document.createElement('video')
    elem.className = name
    elem.id = id
    elem.muted = true

    return elem
  }
}

module.exports = Object