const Object = require('./class')

describe('Class',()=>{
  it('create video object',()=>{
    const video = Object.video('peer','1')

    expect(video).toBeInstanceOf(HTMLVideoElement)
    expect(video.className).toBe('peer')
    expect(video.id).toBe('1')
    expect(video.muted).toBe(true)
  })

})