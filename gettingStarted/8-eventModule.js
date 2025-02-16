// const EventEmmiter = require("node:events");
// const eventEmmiter = new EventEmmiter

// eventEmmiter.on('start', ()=> {
//     console.log('started')
// })

// eventEmmiter.emit('start')

console.log('hello world')

const EventEmmiter = require('node:events')
const eventEmmiter = new EventEmmiter

// The on method sets a event like listening for and event like eventListener do setting the function.
eventEmmiter.on('start', ()=> {
    console.log('Event started')
})

// the Emitter method triggers the event like you clicked and run the callback
eventEmmiter.emit('start')


// multiple arguments
eventEmmiter.on('newStart', (start, end) => {
    console.log(`event started ${start} and end at ${end}`)

})

eventEmmiter.emit('newStart', 1, 100)



// Practice 2

const scream = () => {
    console.log('I am screaming')
}

eventEmmiter.on('scream', scream)
eventEmmiter.emit('scream')

const arguMentedEvent = (arg1, arg2) => {
    console.log(`Hi there! this is ${arg1} and this is ${arg2}`)

}

eventEmmiter.on('intro', arguMentedEvent)
eventEmmiter.emit('intro','Megatron', 'Optimus Prime')